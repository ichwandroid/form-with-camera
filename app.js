require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { google } = require('googleapis');
const credentials = require('./config/credentials');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'cache/' });

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Konfigurasi Google Auth
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: [
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/spreadsheets'
  ]
});

// Inisialisasi Google Sheets dan Drive
const sheets = google.sheets({ version: 'v4', auth });
const drive = google.drive({ version: 'v3', auth });

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const FOLDER_ID = process.env.FOLDER_ID;

// Endpoint untuk mendapatkan daftar nama
app.get('/api/names', (req, res) => {
  fs.readFile(path.join(__dirname, '/config/names.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading names file' });
    }
    const names = JSON.parse(data).names;
    res.json(names);
  });
});

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', upload.single('photo'), async (req, res) => {
  try {
    const { name } = req.body;
    const photoFile = req.file;

    // Upload foto ke Google Drive
    const fileMetadata = {
      name: `${name}_${Date.now()}.jpg`,
      parents: [FOLDER_ID]
    };
    
    const media = {
      mimeType: 'image/jpeg',
      body: require('fs').createReadStream(photoFile.path)
    };

    const driveResponse = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id'
    });

    // Simpan data ke Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:B',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[name, `https://drive.google.com/file/d/${driveResponse.data.id}`]]
      }
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Berjalan di http://localhost:${PORT}`);
}); 
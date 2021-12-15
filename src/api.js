const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const multer = require('multer');
const cors = require('cors');
const imgFolder = path.join(__dirname, './images/');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, imgFolder);
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(__dirname));
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Testing server'
    });
});

// const fieldsArray = [{ name: 'gallery', maxCount: '1' }];

// app.post('/upload', upload.fields(fieldsArray), (req, res) => {
app.post('/upload', upload.any(), (req, res) => {
    console.log('Endpoint called');
    try {
      const filepath = path.join(__dirname, './images/' + req.files[0].filename);
      // const filepath = './images/' + req.files[0].filename;
      console.log('response', filepath);

        res.status(200).json({
            uploaded: true,
            url: filepath
        });
    } catch (err) {
        console.log(err);
        res.send(400);
    }
});

app.listen(PORT, console.log(`Server has started at: ${PORT}`));

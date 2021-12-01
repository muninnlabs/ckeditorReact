const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '/images/'));
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

const fieldsArray = [{ name: 'gallery', maxCount: '1' }];

// app.post('/upload', upload.fields(fieldsArray), (req, res) => {
app.post('/upload', upload.any(), (req, res) => {
    console.log('Endpoint called')
    try {
        console.log('response', req.files[0].filename);
        const response = {
            filepath: `./images/${req.files[0].filename}`
        };
        res.send(response.filepath);
    } catch (err) {
        res.send(400);
    }
});

app.listen(PORT, console.log(`Server has started at: ${PORT}`));

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { createStudent } = require('./controllers/studentController');

const app = express();

app.use(cors({
    origin: process.env.REACT_URL
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.post('/create', createStudent);

// Render uses process.env.PORT automatically; locally it uses EXPRESS_URL
const serverPort = process.env.PORT || new URL(process.env.EXPRESS_URL).port || 5000;

app.listen(serverPort, () => {
    console.log(`Express running on port ${serverPort}`);
});

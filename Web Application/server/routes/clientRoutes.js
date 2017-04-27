const express = require('express');
const path = require('path');

module.exports = (app) => {

app.use(express.static(path.join(__dirname, '../../client/dist')));

// Route to angular App
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.get('/coffrefort', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.get('/board', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

app.get('/ajoutJustifs', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

};
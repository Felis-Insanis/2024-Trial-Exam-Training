const express = require('express');
const router = express.Router();
const path = require('path');
const username = "admin" + Math.floor(Math.random()*9).toString();
const password = "password" + Math.floor(Math.random()*9).toString() + Math.floor(Math.random()*9).toString(); 

// const username = "admin";
// const password = "password";

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/login.html'));
});
router.get('/usrpwd/', (req, res) => {
    res.send(`${username}; ${password}`);
});

router.get('/treasure/', (req, res) => {
    console.log(username, req.headers.u53rn4me);
    console.log(password, req.headers.p45sw0rd);
    if (req.headers.u53rn4me == username && req.headers.p45sw0rd == password) {
        res.send('treasure.jpg');
    } else {
        res.send('no_treasure.jpg');
    }
});

router.get('/treasure.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '/treasure.jpg'));
})

router.get('/no_treasure.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '/no_treasure.jpg'));
})

module.exports = router;
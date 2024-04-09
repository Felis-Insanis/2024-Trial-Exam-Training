const express = require('express');
const router = express.Router();

// const username = "admin" + Math.floor(Math.random()*9).toString();
// const password = "password" + Math.floor(Math.random()*9).toString() + Math.floor(Math.random()*9).toString(); 

const username = "admin";
const password = "password";

router.get('/', (req, res) => {
    res.send(`${username}; ${password}`);
});

router.get('/treasure/', (req, res) => {
    console.log(username, req.username)
    if (req.headers.username == username && req.headers.password == password) {
        res.send('Yippee')
    } else {
        res.send('Booo')
    }
})

module.exports = router;
const express = require('express');
const router = express.Router();
const path = require('path');
const username = "admin" + Math.floor(Math.random()*9).toString(); // lager en random brukernavn når APIen oppstartes
const password = "password" + Math.floor(Math.random()*9).toString() + Math.floor(Math.random()*9).toString(); // lager en random passord når APIen oppstartes

// const username = "admin";
// const password = "password";

// hovedsiden
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/login.html')); // viser nettsiden beskrivet i login.html
});

// side som viser brukernavnet og passordet
router.get('/usrpwd/', (req, res) => {
    res.send(`${username}; ${password}`);
});

// melding til ansatte om hvordan den nye brukernavn + passord systemet funker
router.get('/important/', (req, res) => {
    res.sendFile(path.join(__dirname, '/important.html'));
});

// sender navn av bilde av en tom eller en full skattkiste basert på om brukernavnet og passordet gitt i headeren av requesten er korrekt eller ikke.
router.get('/treasure/', (req, res) => {
    // console.log(username, req.headers.u53rn4me);
    // console.log(password, req.headers.p45sw0rd);

    // sjekker om passord og brukernavn er korrekt
    if (req.headers.u53rn4me == username && req.headers.p45sw0rd == password) {
        res.send('treasure.jpg'); // full skattkiste
    } else {
        res.send('no_treasure.jpg'); // tom skattkiste
    }
});

// sender bilde filen av full skattkiste
router.get('/treasure.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '/treasure.jpg'));
    console.log("Treasure sent.");
    console.log("You've found the treasure!");
});

// sender bilde filen av tom skattkiste
router.get('/no_treasure.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '/no_treasure.jpg'));
    console.log("Empty chest sent.");
    console.log("Not this one.");

});

module.exports = router;
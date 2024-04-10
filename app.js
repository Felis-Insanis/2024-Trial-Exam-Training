const express = require('express');
const cors = require("cors")
const app = express();
// const port = Math.floor(Math.random() * 48000 + 550); // randomiserer porten nettsiden kjøres på

const port = 3000; // bestemmer porten til å være 3000

const routes = require("./routes");

app.use(cors()); // tillater alle cross-site requests

app.use('', routes); // burker routes.js filen til å styre routing

// oppstarter sørveren
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`) // sender melding om at sørveren kjøres
});
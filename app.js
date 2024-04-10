const express = require('express');
const cors = require("cors")
const app = express();
// const port = Math.floor(Math.random() * 48000 + 550); // randomiserer porten nettsiden kjøres på
const port = 3000;

const routes = require("./routes");

app.use('/api', routes);
app.use(cors());

// oppstarter sørveren
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`) // sender melding om at sørveren kjøres
});
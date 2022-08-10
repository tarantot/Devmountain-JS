const express = require('express');
const cors = require('cors');
//Cors is a package that allows the client and server to communicate 
//with each other without the need for advanced configuration.

//const events = require('events');
const PORT = 4000;

const app = express();
app.use(express.json());
app.use(cors());

var friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley", "Taras"];

app.get("/api/users", (req, res) => {
    res.status(200).send(friends);
  });

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
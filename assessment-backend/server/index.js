const express = require("express");
const cors = require("cors");
//const methodOverride = require('method-override');

const app = express();

app.use(cors());
//app.use(methodOverride('_method'));
app.use(express.json());

const { getCompliment, getFortune, addIdea, updateIdea, deleteIdea, alertIdea } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post('/api/idea/:idea', addIdea);
app.put("/api/idea/:idea", updateIdea);
app.delete("/api/idea/:index", deleteIdea);
app.get("/api/idea/:index", alertIdea);

app.listen(4000, () => console.log("Server running on 4000"));
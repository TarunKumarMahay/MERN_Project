const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

//import notes from "./data/notes";
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

//fetches all the notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

//to fetch a single note
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  console.log(note);
  res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server started on port ${PORT}"));

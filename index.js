'use strict';

const express = require("express");
const app = express();
const ducks = []

// READ
app.get("/hello", (req, res) => {
    res.send("Hello, World");
})

// CREATE
app.post("/createDuck", (req, res) => {
    ducks.push(req.body);
    res.status(201).send(ducks);
})

// DELETE
app.delete("/deleteDuck/:id", (req, res) => {
    console.log("ID: ", req.params.id);
    res.send();
})

// UPDATE
app.patch("/updateDuck/:id", (req, res) => {
    console.log("ID:", req.params.id);
    console.log("QUERY", req.query);
    res.send();
})


const server = app.listen(4494, () => console.log(`Server successfully started on port ${server.address().port}`));
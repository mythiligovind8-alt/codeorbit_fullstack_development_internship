
// Import Express
const express = require("express");

// Create Express application
const app = express();

// Define port number
const PORT = 3000;

// Middleware to read JSON data
app.use(express.json());

// Store notes in an array
let notes = [
    {
        id: 1,
        title: "Learn JavaScript",
        content: "Practice basics"
    }
];

// Home route
app.get("/", (req, res) => {
    res.send("Notes API is running!");
});

// Get all notes
app.get("/notes", (req, res) => {
    res.json(notes);
});

// Add a new note
app.post("/notes", (req, res) => {

    const newNote = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content
    };
    notes.push(newNote);

    res.status(201).json(newNote);
});

// Update a note
app.put("/notes/:id", (req, res) => {
    const id = Number(req.params.id);

    const note = notes.find(n => n.id === id);

    if (!note) {
        return res.status(404).json({ message: "Note not found" });
    }

    note.title = req.body.title;
    note.content = req.body.content;

    res.json(note);
});

// Delete a note
app.delete("/notes/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = notes.findIndex(n => n.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Note not found" });
    }

    notes.splice(index, 1);

    res.json({ message: "Note deleted successfully" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

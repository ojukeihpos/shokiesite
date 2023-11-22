const dbName = 'high-rollers'
const PORT = 7777
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/', {
    dbName: dbName,
});

// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
});
const User = mongoose.model('mahjong-soul-ids', UserSchema);

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log(`App listen at port ${PORT}`);
app.use(express.json());
app.use(cors());
app.get("/players", (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

app.listen(PORT);

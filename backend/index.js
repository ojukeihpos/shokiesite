require('dotenv').config()
const axios = require('axios')
const express = require('express');
const session = require('express-session')
const app = express();
const cors = require("cors");
const dbName = process.env.dbName
const PORT = process.env.PORT
const mongoose = require('mongoose');
const passport = require('passport');
const { Strategy, Scope } = require('@oauth-everything/passport-discord');

const DISCORD_API = 'http://discord.com/api/v10';

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((id, done) => {
    done(null, id)
})

passport.use(new Strategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: 'http://localhost:3000/auth/discord/callback',
    scope: [Scope.IDENTIFY, Scope.GUILDS],
}, async (accessToken, refreshToken, profile, done) => {
    console.log(accessToken)
    /*
    var validUser = false
    await axios.get(`${DISCORD_API}/users/@me/guilds`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    })
        .then(res => validUser = res.data.some(guild => guild.id == process.env.guildID))
    this works but then i realized it's useless because they can just manipulate the cookie
    */
    done(null, { accessToken, profile })
}))


mongoose.connect(`mongodb://${process.env.dbUrl}:27017/`, {
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


console.log(`App listening on port ${PORT}`);
app.use(express.json());
app.use(cors());
app.use(session({
    secret: 'shokie site',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize())

app.get("/mahjong", (req, res) => {
    res.send("test")
});
app.get("/mahjong/players", (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

app.get("/checkAccessToken", async (req, res) => {
    let accessToken = req.query.accessToken
    console.log(accessToken)
    res.send("test")
})

app.get("/auth/discord", passport.authenticate("discord"), (req, res) => {
    res.send(200)
});
app.get('/auth/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/mahjong/fail',
    failureMessage: true,
    failureFlash: "Failed to authenticate",
}), (req, res) => {
    res.cookie('accessToken', req.user.accessToken, {
        maxAge: 3600000,
    })
    res.cookie('avatar', req.user.profile.photos[0].value, {
        maxAge: 3600000,
    })
    res.redirect('/mahjong/players')
})

app.listen(PORT);

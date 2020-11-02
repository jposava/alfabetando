require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const server = express();

const url = process.env.DATABASE_STRING;

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', (err)=> console.log(err));
db.once('open', ()=> console.log('Database Connected'));

server.use(express.json());

const rankingNames = require('./Routes/rankingNames');
server.use('/rankingNames', rankingNames);

server.listen(3000, () => {
    console.log('API ONLINE');
});
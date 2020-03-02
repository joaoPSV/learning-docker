const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;
//Set up default mongoose connection
const mongoDB = 'mongodb://db/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

server.get('/', (req, res, next) => res.send('Backend'));

server.listen(3000);


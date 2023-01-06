//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//express 
const app = express();

const port = 8001;
app.use(express.json());
app.use(cors());
//mongoose connection
mongoose.connect('mongodb://localhost/eventstracker');

//routes
const eventsRoutes = require('./controllers/eventController');
app.use('/events', eventsRoutes)
//Express Listener
const listener = () => {
    console.log(`server on ${port}`);
}

app.listen(port, listener)


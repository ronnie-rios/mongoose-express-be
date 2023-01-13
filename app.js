//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//express 
const app = express();
const auth = require('./util/auth')

const port = 8001;
app.use(express.json());
app.use(cors());
app.use(auth)
//mongoose connection
mongoose.connect('mongodb://localhost/eventstracker');

//routes
const eventsRoutes = require('./controllers/eventController');
app.use('/events', eventsRoutes)

const userRoutes = require('./controllers/userController');
app.use('/users', userRoutes)
//Express Listener
const listener = () => {
    console.log(`server on ${port}`);
}

app.listen(port, listener)


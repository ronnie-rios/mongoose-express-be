const express = require('express');
const router = express.Router();
const Events = require('../models/Event');

router.get('/', async (req, res) => {
    const events = await Event.find();
    return res.json(events);
});

router.post('/', async (req, res) => {
    const newEvent = await Event.create(req.body);
    if (!req.body.name || !req.body.desc) {
        return res.json({
            err: 'please enter at the role and company'
        })
    } else {
        return res.json(newEvent)
    }
});

module.exports = router;
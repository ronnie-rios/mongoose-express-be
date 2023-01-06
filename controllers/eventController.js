const express = require('express');
const router = express.Router();
const Events = require('../models/Event');

router.get('/', async (req, res) => {
    const events = await Events.find();
    return res.json(events);
});

router.post('/', async (req, res) => {
    const newEvent = await Events.create(req.body);
    if (!req.body.name || !req.body.location) {
        return res.json({
            err: 'please enter at the role and company'
        })
    } else {
        return res.json(newEvent)
    }
});

module.exports = router;
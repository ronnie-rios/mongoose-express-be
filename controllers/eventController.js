const express = require('express');
const router = express.Router();
const Events = require('../models/Event');

router.get('/', async (req, res) => {
    const events = await Events.find();
    return res.json(events);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const singleEvent = await Events.findById(id);
    if(!singleEvent) {
        res.status(404).json({ err: 'not found'})
    }
    return res.json(singleEvent);
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
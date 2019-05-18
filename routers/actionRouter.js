const express = require('express');
const ACTION_DB = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await ACTION_DB.get();
        res.status(200).json(actions);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Error retrieving actions' });
    }
});

router.post('/', async (req, res) => {
    try {
        const action = await ACTION_DB.insert(req.body);
        res.status(201).json(action);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Error posting action' });
    }
});

module.exports = router;

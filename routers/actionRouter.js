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

router.put('/:id', async (req, res) => {
    try {
        const changed = await ACTION_DB.update(req.params.id, req.body);
        if(!changed) {
            res.status(404).json({ message: 'Unable to update the action with that ID' });
            return null;
        } else {
            res.status(200).json(changed);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Error updating resource' });
    }
});

// router.delete();

module.exports = router;

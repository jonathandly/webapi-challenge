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

// GET by ID all actions
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const action = await ACTION_DB.get(id);
        if(action) {
            res.status(200).json(action);
        } else {
            res.status(404).json({ message: 'Unable to locate action with that ID' });
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Error finding action with that ID' });
    }
})
// Post with check for ID

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

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await ACTION_DB.remove(req.params.id);
        if(!deleted) {
            res.status(400).json({ message: 'Could not delete resource with that ID' });
        } else {
            res.status(200).json({ message: 'Action successfully removed' });
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Error deleting resource' });
    }
});

module.exports = router;

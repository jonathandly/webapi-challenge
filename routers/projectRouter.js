const express = require('express');
const PROJECT_DB = require('../data/helpers/projectModel');

const router = express.Router();


// GET all projects
router.get('/', async (req, res) => {
    try {
        const all = await PROJECT_DB.get();
        res.status(200).json(all);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Unable to retrieve all projects' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = await PROJECT_DB.get(req.params.id);
        if(id) {
            res.status(200).json(id);
        } else {
            res.status(404).json({ message: 'Could not locate project with that ID' });
        }

    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Error retrieving the project with that ID' });
    }
});

router.post('/', async (req, res) => {
    try {
        const proj = {...req.body};
        const newProj = await PROJECT_DB.insert(proj);
        res.status(201).json(newProj);
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Error adding project' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const changed = await PROJECT_DB.update(req.params.id, req.body);
        if(!changed) {
            res.status(404).json({ message: 'Unable to update the project with that ID' });
            return null;
        } else {
            res.status(200).json(changed);
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Unable to update project' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await PROJECT_DB.remove(req.params.id);
        if(!deleted) {
            res.status(400).json({ message: 'Could not delete project with that ID' });
        } else {
            res.status(200).json({ message: 'Project successfully removed' });
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({ message: 'Unable to delete project with that ID' });
    }
});

module.exports = router;

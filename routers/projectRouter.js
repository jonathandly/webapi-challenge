const express = require('express');
const PROJECT_DB = require('../data/helpers/projectModel');

const router = express.Router();

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

// router.post();

// router.put();

// router.delete();

module.exports = router;

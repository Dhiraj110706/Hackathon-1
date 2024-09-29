const express = require('express');
const Homework = require('../models/Homework');

const router = express.Router();

router.post('/', async (req, res) => {
    const { user_id, title, due_date } = req.body;
    try {
        const homeworkRecord = await Homework.assign(user_id, title, due_date);
        res.status(201).json({ message: 'Homework assigned successfully!', homeworkRecord });
    } catch (error) {
        res.status(500).json({ message: 'Error assigning homework' });
    }
});

module.exports = router;

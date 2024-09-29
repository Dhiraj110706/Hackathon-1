const express = require('express');
const StudentProfile = require('../models/StudentProfile');

const router = express.Router();

router.post('/', async (req, res) => {
    const { user_id, bio, profile_picture } = req.body;
    try {
        const profileRecord = await StudentProfile.create(user_id, bio, profile_picture);
        res.status(201).json({ message: 'Student profile created successfully!', profileRecord });
    } catch (error) {
        res.status(500).json({ message: 'Error creating student profile' });
    }
});

module.exports = router;

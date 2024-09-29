const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await User.create(username, email, password);
        res.status(201).json({ message: 'User created successfully!', user });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
});

module.exports = router;

const express = require('express');
const Attendance = require('../models/Attendance');

const router = express.Router();

router.post('/', async (req, res) => {
    const { user_id, date, status } = req.body;
    try {
        const attendanceRecord = await Attendance.record(user_id, date, status);
        res.status(201).json({ message: 'Attendance recorded successfully!', attendanceRecord });
    } catch (error) {
        res.status(500).json({ message: 'Error recording attendance' });
    }
});

module.exports = router;

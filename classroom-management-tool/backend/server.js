// server.js
const express = require('express');
const { Pool } = require('pg');
const router = require('./routes/signup');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL connection setup
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Middleware
app.use(express.json());
app.use("/user",router)
// Sample route to test the connection
app.get('/', (req, res) => {
    res.send('Welcome to the Classroom Management Tool API');
});

// Sample route to get data from PostgreSQL
app.get('/students', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM students');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching data from PostgreSQL:', error);
        res.status(500).send('Server error');
    }
});

app.post('/user', async (req, res) => {
    const { username, email, password } = req.body;
    console.log("helloe")
    try {
        const user = await User.create(username, email, password);
        res.status(201).json({ message: 'User created successfully!', user });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const cors = require('cors');
app.use(cors());
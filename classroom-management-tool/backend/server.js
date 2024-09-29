const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db_config');
const signupRoutes = require('./routes/signup');
const signinRoutes = require('./routes/signin');
const attendanceRoutes = require('./routes/attendance');
const homeworkRoutes = require('./routes/homework');
const studentProfilesRoutes = require('./routes/student_profiles');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('frontend'));

app.use('/api/signup', signupRoutes);
app.use('/api/signin', signinRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/homework', homeworkRoutes);
app.use('/api/student_profiles', studentProfilesRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

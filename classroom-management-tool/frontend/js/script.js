// Handle Sign Up
document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    const result = await response.json();
    alert(result.message);
});

// Handle Sign In
document.getElementById('signinForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    alert(result.message);
});

// Handle Attendance Submission
document.getElementById('attendanceForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user_id = document.getElementById('user_id').value;
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;

    const response = await fetch('/api/attendance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id, date, status }),
    });

    const result = await response.json();
    alert(result.message);
});

// Handle Homework Submission
document.getElementById('homeworkForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user_id = document.getElementById('user_id').value;
    const title = document.getElementById('title').value;
    const due_date = document.getElementById('due_date').value;

    const response = await fetch('/api/homework', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id, title, due_date }),
    });

    const result = await response.json();
    alert(result.message);
});

// Handle Student Profile Submission
document.getElementById('studentProfileForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user_id = document.getElementById('user_id').value;
    const bio = document.getElementById('bio').value;
    const profile_picture = document.getElementById('profile_picture').value;

    const response = await fetch('/api/student_profiles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id, bio, profile_picture }),
    });

    const result = await response.json();
    alert(result.message);
});

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username', // replace with your DB username
    password: 'your_password', // replace with your DB password
    database: 'your_database' // replace with your database name
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// Booking endpoint
app.post('/book', (req, res) => {
    const { name, date } = req.body;
    const query = 'INSERT INTO bookings (name, date) VALUES (?, ?)';

    db.query(query, [name, date], (err, results) => {
        if (err) {
            console.error('Error inserting booking:', err);
            return res.status(500).send('Error making booking');
        }
        res.status(201).send(`Booking made with ID: ${results.insertId}`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
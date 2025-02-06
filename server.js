const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000
const mongo = process.env.MONGO_URI

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/activities', require('./routes/activityRoutes'));

mongoose.connect(mongo)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });
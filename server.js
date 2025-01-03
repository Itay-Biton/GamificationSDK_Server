require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Base route for health check
app.get('/', (req, res) => {
  res.send('Gamification SDK server is running!');
});

// Import routes
const playersRoutes = require('./routes/PlayerRoutes');
const achievementsRoutes = require('./routes/AchievementRoutes');
const appRoutes = require('./routes/AppRoutes');
const apikeyRoutes = require('./routes/ApiKeyRoutes');

// Use routes
app.use('/players', playersRoutes);
app.use('/achievements', achievementsRoutes);
app.use('/app', appRoutes);
app.use('/apikey', apikeyRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Importing the mongoose library
const mongoose = require('mongoose');
// Connecting to the MongoDB database
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/social-nosql-api',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// Exporting the connection to the database
module.exports = mongoose.connection
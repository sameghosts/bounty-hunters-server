// require mongoose

const MONGOOSE = require('mongoose');

// connect 
MONGOOSE.connect(process.env.MONGODB_URI || 'mongodb://localhost/hunters', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
});

// export 
module.exports.Bounty = require('./bounty');
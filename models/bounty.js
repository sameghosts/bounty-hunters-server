const MONGOOSE = require('mongoose');

const bountySchema = new MONGOOSE.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100
  },
  wantedFor: {
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  reward: {
    type: Number,
    default: 10000,
  },
  hunters: [String],
  caputred: {
    type: Boolean,
    default: false
  },
  lastSeen: String
});

const Bounty = MONGOOSE.model('Bounty', bountySchema);
module.exports = Bounty;
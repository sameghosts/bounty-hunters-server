// set dependencies
const DB = require('../models');
const ROUTER = require('express').Router();

// Create - POST "/" - create one bounty
ROUTER.post('/', (req, res) => {
  // res.send('Hitting the post route');
  DB.Bounty.create(req.body)
  .then(newBounty => {
    res.status(201).send(newBounty);
  })
  .catch(err => { 
    res.status(500).send({ message:`Internal Server Error:\n${err}`});
  })
});

// Read - GET '/' - read all bounties

// Read Details - GET '/:id' - read one bounty


// Update - PUT '/:id' - update one bounty

// Destroy - DELETE '/:id' - delete one bounty




// export
module.exports = ROUTER;
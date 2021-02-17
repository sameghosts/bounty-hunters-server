// require packages
require('dotenv').config();
const CORS = require('cors');
const EXPRESS = require('express');

// create instance for express app
const APP = EXPRESS();

// set up middleware
APP.use(CORS());
APP.use(EXPRESS.urlencoded({ extended: false }));
APP.use(EXPRESS.json());

APP.use('/bounties', require('./controllers/bounties'));

// Listen on port
APP.listen (3000 || process.env.PORT, () => console.log(`Keeping it  ${ process.env.PORT}`));
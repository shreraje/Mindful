const router = require('express').Router;
const mindful = require('./mindful.routes');

router.arguments('/api/mindful', mindful);

module.exports = router
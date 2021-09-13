const { Router } = require('express');
const soamee = require('./soamee')



const router = Router();

router.use('/', soamee)


module.exports = router;

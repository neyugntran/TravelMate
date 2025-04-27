const express = require('express')
const router = express.Router()

const userRoutes = require('../routes');


router.use('/user', userRoutes);

router.use('/admin', userRoutes);

module.exports = router
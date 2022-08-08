const express = require('express');
const loggerModule=require('../logger/logger')
const helperModule=require('../util/helper')
const formatterModule=require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    loggerModule.printInfo()
    helperModule.getTodaysDate()
    helperModule.getCurrentMonth()
    helperModule.printBatchDetails()
    formatterModule.trimMyString()
    formatterModule.getLowerCaseString()
    formatterModule.getUpperCasestring()


    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason
const express = require('express');
const loggerModule=require('../logger/logger')
const helperModule=require('../util/helper')
const formatterModule=require('../validator/formatter')
const underscore=require('underscore')
const lodash=require('lodash')


const router = express.Router();

router.get('/test-me', function (req, res) {
    loggerModule.printInfo()
    helperModule.getTodaysDate()
    helperModule.getCurrentMonth()
    helperModule.printBatchDetails()
    formatterModule.trimMyString()
    formatterModule.getLowerCaseString()
    formatterModule.getUpperCasestring()


    

 let weekend =['saturday','sunday','monday']
 let result=underscore.first(weekend,2)
 console.log('underscoreexample result is',result);

 let month=['january','february','march','april','may','june','july','august','september','october','november','december']
 let result1=lodash.chunk(month,4)
 console.log('month name',result1);

 let oddNumber=[1,3,5,7,9,11,13,15,17,19,21]
 let result2=lodash.tail(oddNumber)
 console.log('odd number',result2);

 let unique=([2,3],[3],[2,3],[3,4],[1,2])
 let result3=lodash.union(unique)
 console.log('unique no',result3);

 let pairs=([ ['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']])
 let result4=lodash.fromPairs(pairs)
 console.log('value pair',result4);





    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason
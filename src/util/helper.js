
const printDate=function(){
    let currentDate=new Date()
    currentDate=currentDate.getDate()
    console.log(currentDate);
}

const printMonth=function(){
    let currentDate=new Date()
    let currentMonth=currentDate.getMonth()
    currentMonth=currentMonth + 1
    console.log(currentMonth);
}

const getBatchInfo=function(){
    console.log('Radon, W3D5, the topic for today is Nodejs module system');

}
module.exports.getTodaysDate = printDate
module.exports.getCurrentMonth = printMonth
module.exports.printBatchDetails = getBatchInfo

const d = new Date();
let printName = function(){
    console.log( d);
}

const batchInfo = "Nodejs module system"
let printName1 = function(){
    console.log('plutonium, W3D5, the topic for today is', batchInfo);
}


module.exports.name = d
module.exports.printName=printName

module.exports.name = batchInfo
module.exports.printName1=printName1
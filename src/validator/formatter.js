const data = "     functionup      ";
let printName = function(){
    console.log(data.trim());
}
const myGreeting= 'HI MY NAME IS PRINCE KUMAR';
let printName2 = function(){
    console.log(myGreeting.toLowerCase());
}
const Funn  = 'hi iam from katihar bihar';
let printName3 = function(){
    console.log(Funn.toUpperCase());
}


module.exports.name = data
module.exports.printName=printName
module.exports.name = myGreeting
module.exports.printName2=printName2
module.exports.name = Funn
module.exports.printName3=printName3


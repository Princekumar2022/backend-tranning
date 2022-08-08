const trim = function(){
    let name = "    prince kumar     "
    name=name.trim()
    console.log(name)
}

const changetoLowerCase = function() {
    let lowerCaseString= "PrINCe Kumar"
    lowerCaseString=lowerCaseString.toLowerCase()
    console.log(lowerCaseString);
}

const changeToUpperCase= function(){
    let upperCaseString= "PrINCe Kumar"
    upperCaseString=upperCaseString.toUpperCase()
    console.log(upperCaseString);
}

module.exports.trimMyString=trim
module.exports.getLowerCaseString=changetoLowerCase
module.exports.getUpperCasestring=changeToUpperCase

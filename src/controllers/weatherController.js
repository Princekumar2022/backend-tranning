let axios = require("axios")

// 2.  GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. Now proceed further
// Create API's to do each of the following:
//     - get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
// - then change the above to get the temperature only(of London)
//     - Sort the cities["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
//                     result should look something like this
// [
//     { city: "London", temp: 280 },
//     { city: "Moscow", temp: 290 },
//     { city: "Bangalore", temp: 301.2 },
//                     .......
//                     ]



const currentWeather = async function (req, res) {

    try {
        let q = req.query.q
        let app = req.query.appId
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${app}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}


const gettemperature = async function (req, res) {
    try {
        let q = req.query.q
        let app = req.query.appId
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${app}`
        }
        let result = await axios(options);
        let data = result.data
        console.log(result.data.main.temp)
        res.status(200).send({ msg: {temperature: data.main.temp}, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




const getSortedCities = async function (req, res) {
    try {
        let app = req.query.appId
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjarray = []
        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${app}`
            }
            let result = await axios(options);
            console.log(result.data.main.temp);
            obj.temp = result.data.main.temp
            cityObjarray.push(obj)

        }
        let sorted = cityObjarray.sort(function (a, b) { return a.temp - b.temp })
        console.log(sorted);
        res.status(200).send({ data: sorted, status: true })

    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}




module.exports.currentWeather = currentWeather
module.exports.gettemperature = gettemperature
module.exports.getSortedCities = getSortedCities
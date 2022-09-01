const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")
const WeatherController = require("../controllers/weatherController")
const memesController= require("../controllers/memesController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//cowin
router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)

//1.
router.get("/cowin/getByDistrict", CowinController.getDistrictsById)

//2 weather 
router.get("/getWeather", WeatherController.currentWeather)
router.get("/getTemperature", WeatherController.gettemperature)
router.get("/getSortCities", WeatherController.getSortedCities)

// 3 meemes
router.get("/getAllMemes",memesController.getAllMems)
router.post("/MemesId",memesController.memesId)
router.post("/getMemeAllData",memesController.getMemeAllData)
module.exports = router;
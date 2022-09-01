let axios = require("axios")

// 3. Axios POST request assignment

// 1. Get all the memes at Postman(https://api.imgflip.com/get_memes)
// 2. Pick a memeId you want(Eg 129242436) for the POST request
// 3. Create a Post request(https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
//         template_id < meme_id >
//         text0 < text you want as a caption >
//         text1 < optional >
//     username chewie12345
//             password meme@123

// 4. Return a response with a body like this
// "data": {
//     "url": "https://i.imgflip.com/5mvxax.jpg",
//         "page_url": "https://imgflip.com/i/5mvxax"
// }



//1. 
const getAllMemes = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/get_memes`
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


// 2. 

const memesId = async function (req, res) {

    try {
        id= req.body.memesId
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/caption_image?template_id=${id}`,
            data: id
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}



const getMemeAllData = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/caption_image?template_id=181913649&text0=Hithere&text1=yesplz&username=Princekumar8&password=@prince12345`
        }
        let result = await axios(options);
        let data = result.data
        // console.log(result.data.memes)
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}

module.exports.getAllMems = getAllMemes
module.exports.memesId = memesId
module.exports.getMemeAllData = getMemeAllData
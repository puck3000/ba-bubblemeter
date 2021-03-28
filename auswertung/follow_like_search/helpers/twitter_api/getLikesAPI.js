//75 requests in 15 minutes
const fetch = require("node-fetch")
require('dotenv').config()
var bearerToken = process.env.bearerToken

export default async function getLikes(userId) {

    var myHeaders = new fetch.Headers();
    myHeaders.append("Authorization", "Bearer " + bearerToken);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    var fetchUrl = "https://api.twitter.com/1.1/favorites/list.json?user_id=" + userId.toString()
    var result = (await fetch(fetchUrl, requestOptions)).json()
    return result
}
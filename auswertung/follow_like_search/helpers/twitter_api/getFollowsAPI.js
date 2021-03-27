const fetch = require("node-fetch")
require('dotenv').config()
var bearerToken = process.env.bearerToken

export default async function getFollows(userId) {

    var myHeaders = new fetch.Headers();
    myHeaders.append("Authorization", "Bearer " + bearerToken);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    var fetchUrl = "https://api.twitter.com/2/users/" + userId.toString() +"/following?max_results=1000"
    var resultJSON = await (await fetch(fetchUrl, requestOptions)).json()
    var followedUsers = []
    
    followedUsers = addData(resultJSON.data, followedUsers)
    
    while(resultJSON.meta.next_token) {
        var newFetchUrl = fetchUrl + "&pagination_token=" + resultJSON.meta.next_token.toString()
        resultJSON = await (await fetch(newFetchUrl, requestOptions)).json()
        followedUsers = addData(resultJSON.data, followedUsers)
    }

    return followedUsers
}

function addData(data, list) {
    data.forEach(dataSet => {
        var dataSetObject = {id: dataSet.id, name: dataSet.name, username: dataSet.username}
        list.push(dataSetObject)
    })
    return list
}
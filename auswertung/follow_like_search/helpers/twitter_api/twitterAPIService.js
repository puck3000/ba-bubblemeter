import getUser from "./getUserAPI"
import getLikes from './getLikesAPI'
import getFollowers from "./getFollowersAPI"

//returns the userId of an accountname
async function getUserId(username) {
    const user = await getUser(username)
    const userId = user.data.id
    return userId
}

//returns a list of postIds which were liked by the user
async function getLikesId(userId) {
    const likesRes = await getLikes(userId)
    var likesIds = []

    for (var i = 0; i < likesRes.length; i++){
        likesIds.push(likesRes[i].id)
    }

    return likesIds
}

//returns a list of postIds with name of the poster which were liked by the user
async function getLikesIdWithName(userId) {
    const likesRes = await getLikes(userId)
    var likesIdsWithNames = []

    for (var i = 0; i < likesRes.length; i++){
        var postId = likesRes[i].id.toString()
        var username = likesRes[i].user.screen_name
        var likeWithName = {}

        likeWithName[username] = postId
        likesIdsWithNames.push(likeWithName)
    }

    return likesIdsWithNames
}

//returns a list of followerIds which the user follows
async function getFollowersId(userId) {
    const followedUsers = await getFollowers(userId)
    var followedUserIds = []

    followedUsers.forEach(followedUser => {
        followedUserIds.push(followedUser.id)
    });

    return followedUserIds
}

//returns a list of usernames which the user follows
async function getFollowersUsername(userId) {
    const followedUsers = await getFollowers(userId)
    var followedUsernames = []

    followedUsers.forEach(followedUser => {
        followedUsernames.push(followedUser.username)
    });

    return followedUsernames
}

export default {getUserId, getLikesId, getLikesIdWithName, getFollowersId, getFollowersUsername}
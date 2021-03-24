import likeTweetFromOtherUser from './likeTweetFromOtherUser'
import followAccFromOtherUser from './followAccFromOtherUser'
import twitterAPIService from '../twitter_api/twitterAPIService'
import {delay} from '../other/delay'

export async function copyAccount(accountToCopy, page) {

    //get userId of username
    const accountToCopyId = await twitterAPIService.getUserId(accountToCopy);
    
    //get list of follower usernames
    const followers = await twitterAPIService.getFollowedUsernames(accountToCopyId)

    //get list of liked tweets with username and postId
    const likedTweets = await twitterAPIService.getLikesIdWithName(accountToCopyId)
    
    for(const follower of followers) {
        await followAccFromOtherUser(follower, page)
        await delay(30000)
    }

    for(const [twitterer, tweetID] of Object.entries(likedTweets)) {
        await likeTweetFromOtherUser(twitterer, tweetID, page)
        await delay(10000)
    }  
}


export default async function followAccFromOtherUser(accountNameToFollow, page) {
  await page.goto('https://twitter.com/home', {waitUntil: 'networkidle2'})
  await page.goto(`https://twitter.com/${accountNameToFollow}`, {waitUntil: 'networkidle2'})
  await page.waitForSelector('div[data-testid*="follow"]')
  await page.click('div[data-testid*="follow"]')
  console.log(`Followed ${accountNameToFollow}!`)
}
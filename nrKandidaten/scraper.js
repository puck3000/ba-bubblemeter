const puppeteer = require('puppeteer')
const fs = require('fs')

;(async function scrape() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox'],
  })

  const page = await browser.newPage()

  let politicians = []

  const nrOfLoops = 3893
  let i = 0

  for (i; i < nrOfLoops; i++) {
    try {
      // open smartmap page
      await page.goto(
        'https://www.smartvote.ch/de/group/2/election/19_ch_nr/smartmap',
        { waitUntil: 'networkidle2' }
      )

      //  click on "anzeigen"
      await page.waitForSelector('button[type="submit"]')
      await page.click('button[type="submit"]')

      //   wait for svg-circles to load
      await page.waitForSelector('.smartmap-position')

      //   get the circle
      const circles = await page.$$('.smartmap-position')
      const circle = circles[i]

      // get the coordinates
      let koordinaten = await circle.evaluate((cir) => {
        let x = cir.getAttribute('cx')
        let y = cir.getAttribute('cy')
        let coords = {
          x,
          y,
        }
        return coords
      }, circle)

      // get the link
      let url
      await circles[i].click()
      await page.waitForSelector('.sv-candidate-page')
      url = await page.url()
      let smartMapId = url.substring(url.lastIndexOf('/') + 1)

      // push data
      console.log({ smartMapId, koordinaten })
      politicians.push({
        smartMapId,
        koordinaten,
      })
    } catch (error) {
      console.log(error)
    }
  }
  console.log(politicians)

  // write file
  const data = JSON.stringify(politicians)
  fs.writeFileSync('politikerMitTwitterNew.json', data)
})()

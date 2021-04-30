const puppeteer = require('puppeteer')
const fs = require('fs')

const oldKandidates = require('./nrKandidatenMitTwitter.json')
const { log } = require('console')

//delete 'smartmap' property of old Array
const nrKandidaten = oldKandidates.map((obj) => {
  delete obj.smartmap
  delete obj.hasSmartvoteProfile
  return obj
})

;(async function scrape() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox'],
  })

  const page = await browser.newPage()

  for (kandidat of nrKandidaten) {
    try {
      const query = `${kandidat.firstname} ${kandidat.lastname}`
      console.log(query)

      await page.goto(
        'https://www.smartvote.ch/de/group/2/election/19_ch_nr/smartmap'
      )
      await page.waitForSelector('input[id="mat-input-0"]')

      await page.type('input[id="mat-input-0"]', query)
      await page.keyboard.press('Enter')

      await page.waitForSelector('circle.smartmap-position')

      const circle = await page.$('circle.smartmap-position')

      let koordinaten = await circle.evaluate((cir) => {
        let x = cir.getAttribute('cx')
        let y = cir.getAttribute('cy')
        let coords = {
          x,
          y,
        }
        return coords
      }, circle)

      // console.log(koordinaten)
      kandidat.coordinates = koordinaten
    } catch (error) {
      console.log(error)
    }
  }
  await page.close()

  // write file
  const data = JSON.stringify(nrKandidaten)
  fs.writeFileSync('candidates.json', data)
})()

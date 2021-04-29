const puppeteer = require('puppeteer')

;(async function scrape() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox'],
  })

  const page = await browser.newPage()

  await page.setViewport({
    width: 1280,
    height: 980,
    deviceScaleFactor: 1,
  })

  // might be helpful for not getting tossed out that quickly...
  page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299'
  )

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

  //   get array of circles

  const circles = await page.$$('.smartmap-position')
  console.log('lenght', circles.length)

  let data = []

  for (circle of circles.slice([0], [10])) {
    // gettin the coordinates
    let koordinaten = await circle.evaluate((cir) => {
      let x = cir.getAttribute('cx')
      let y = cir.getAttribute('cy')
      let coords = {
        x,
        y,
      }
      return coords
    }, circle)

    // TODO: getting the links

    let candidate = {
      koordinaten: koordinaten,
    }

    data.push(candidate)
  }

  console.log(data)

  // for (let i = 0; i < 5; i++) {
  //   let url
  //   try {
  //     await circles[i].click()
  //     url = await page.url()
  //     console.log(url)
  //     await page.goBack()
  //     url = await page.url()
  //     console.log(url)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // now by hand

  // let url
  // await circles[0].click({ waitUntil: 'networkidle0' })
  // url = await page.url()
  // console.log(url)
  // await page.goBack({ waitUntil: 'networkidle0' })
  // url = await page.url()
  // console.log(url)
  // await circles[1].click({ waitUntil: 'networkidle0' })
  // url = await page.url()
  // console.log(url)
})()

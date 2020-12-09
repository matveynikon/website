const puppeteer = require('puppeteer');
let x = Math.floor(Math.random() * 4000 + 65000);
const j = 86400000 / (1000) - x;
let elem = ('a[title="Angry birds with python (PART 1) 2020"]');
let scr = ('https://www.youtube.com/results?search_query=angry+birds+in+python');
// const c = Math.round(x / 8000) * 1000
// const g = x / 14000
(async () => {
  for (let w = 14; w > 0; w--) {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox']
    })
    let c = 1
    for (let v = 1; v > 0; v--) {
      const q = Math.floor(Math.random() * 2 + 1)
      console.log(q)
      if (q === 1) {
        scr = ('https://www.youtube.com/results?search_query=php+web+scraping')
        elem = ('a[title="php web scraping tutorial(simple)"]')
        x = Math.floor(Math.random() * 6000 + 130000)
      } else {
        scr = ('https://www.youtube.com/results?search_query=python+enumerate')
        elem = ('a[title="enumerate python(2020)"]')
        x = Math.floor(Math.random() * 4000 + 65000)
      }
      const page = await browser.newPage()
      page.setViewport({ width: 440, height: 390 })
      await page.goto(scr, {timeout: 1800000})
      console.log(elem)
      if (c === 1) {
        await page.waitFor(60000)
        c = 2
      } else {
        console.log('sup')
      }       
      for (let f = 200; f > 0; f--) {
        await page.waitFor(6000)
        try {
          await page.click(elem)
          break
        } catch (e) {
          console.log('jeff')
        }
        await page.evaluate(() => {
          window.scrollBy(-1500, window.innerHeight)
        })
      }
      await page.waitFor(5000)
      await page.keyboard.type(' ')  
      console.log(c)
      await page.waitFor(x)
      await page.close()
      await page.waitFor(j)
    }
    browser.close()
  }
})();

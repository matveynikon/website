const puppeteer = require('puppeteer');

(async() => {
    const proxyUrl = 'http://gate.smartproxy.com:7000';
    const username = 'sp55f802da';
    const password = 'Willink+1';

    const browser = await puppeteer.launch({
      args: [
      '--no-sandbox',
      `--proxy-server=${proxyUrl}`],
      headless: false
    });
    let c = 1
    let r = 0
    for (let v = 200; v > 0; v--) {
      const q = Math.floor(Math.random() * 2 + 1)
      const r = Math.floor(Math.random() * 10 + 50)
      try{
        if (q === 1) {
          scr = ('https://www.youtube.com/results?search_query=php+web+scraping+tutorial')
          elem = ('a[title="php web scraping tutorial(simple)"]')
          x = Math.floor(Math.random() * 6000 + 120000)
        } else {
          scr = ('https://www.youtube.com/results?search_query=python+enumerate&sp=CAI%253D')
          elem = ('a[title="Python enumerate tutorial (2020)"]')
          x = Math.floor(Math.random() * 16000 + 232000)
        }
        const page = await browser.newPage()
        const j = 86400000 / (r);
        page.setViewport({ width: 440, height: 390 })
        await page.authenticate({ username, password });
        try{
          await page.goto(scr, {timeout: 60000})
        }
        catch(t){
          console.log('page problem')
        }
        console.log(elem)
        await page.waitFor(15000)
        await page.mouse.click(438, 372)    
        for (let f = 40; f > 0; f--) {
          await page.waitFor(5000)
          try {
            await page.click(elem)
            break
          } catch(e) {
            console.log('rank problem')
          }
          await page.evaluate(() => {
            window.scrollBy(100, window.innerHeight)
          })
        }
        await page.waitFor(3000)
        await page.mouse.click(300, 220)
        await page.waitFor(3000)
        await page.mouse.click(390, 386)
        await page.waitFor(3000)
        await page.keyboard.type(' ')
        await page.waitFor(15000)
        await page.mouse.click(421, 365)
        await page.waitFor(2000)
        // await page.mouse.click(220, 130)
        console.log(c)
        await page.waitFor(x)
        await page.close()
        await page.waitFor(j)
      }
      catch(t){
        console.log("generally sucky")
      }
    }
    browser.close()
})()

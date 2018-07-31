const fs = require('fs');
const { promisify } = require("util");
const puppeteer = require('puppeteer');

function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}


let page;
let browser;

const tc =  // TEST CONFIGURATION
  {
    folder: 'test',
    url:'http://localhost:4200',
    page_width: 1920,
    page_height: 1080
  };



(async () => {
  try {
    await promisify(fs.readdir)(tc.folder);
  } catch(e){
    await promisify(fs.mkdir)(tc.folder);
  }

  const options = {
    headless: false,
    slowMo: 160,
    args: [`--window-size=${tc.page_width},${tc.page_width}`]
  };
  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width: tc.page_width, height:tc.page_height });
  await page.goto(tc.url);

  await page.screenshot({path: tc.folder + '/1.see_dahsboard.png'});

  await page.waitForSelector("#top-heroes");
  await page.click("#Narco");

  await page.screenshot({path: tc.folder + '/2.see_heroe_detail.png'});

  await delay(1000);



  await browser.close();
})();

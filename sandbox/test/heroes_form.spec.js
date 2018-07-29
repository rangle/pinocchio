/**
 * Created by pabloelustondo on 2018-07-16.
 */
import faker from "faker";
import puppeteer from "puppeteer";
console.log("executing heroes form specs ");

const APP0 = "http://localhost:4200";
const APP1 = "http://localhost:4200/detail/12";

const fakeUser = {
  name: faker.name.firstName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  message: faker.random.words()
};

function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

let page;
let browser;
const width = 1920;
const height = 1080;


describe("Edit Heroe", () => {

  test('can open browser and application', async() => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 160,
      args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });


  test("can see dashboard and navgate to detail", async () => {
    await page.goto(APP0);
    await page.waitForSelector("#top-heroes");
    await page.screenshot({path: 'test_images/1.see_dahsboard.png'});
    await page.click("#Narco");
    await page.screenshot({path: 'test_images/2.see_heroe_detail.png'});
    await delay(1000);
  }, 160000);

  test("can change name", async () => {

    await page.waitForSelector("#hero-detail-div");
    await page.click("#hero-detail-name");
    await page.screenshot({path: 'test_images/3.heroe_detail_select_name.png'});
    await page.type("#hero-detail-name", "pablo");
    await page.screenshot({path: 'test_images/4.heroe_detail_name_written.png'});
    await page.click("#hero-detail-save");
    await page.screenshot({path: 'test_images/5.heroes_saved.png'});
  }, 160000);

  test("can see dashboard heroes", async () => {
    await page.goto(APP0);
    await page.waitForSelector("#top-heroes");
    await page.screenshot({path: 'test_images/6.see_dahsboard.png'});
    await page.click("#menu_link_heroes");
    await page.screenshot({path: 'test_images/7.see_heroes.png'});
    await delay(1000);
  }, 160000);

  test("vsn clode browser", () => {
    browser.close();
  });

});

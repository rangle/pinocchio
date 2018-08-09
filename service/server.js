const express = require('express');
const app = express();
const fs = require('fs');
const images_path = './test/';
const { promisify } = require("util");
const puppeteer = require('puppeteer');
let port=3001;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => res.send('Hi, I am Pinocchio!'));

app.get('/images', (req, res) => {
    res.set('Content-Type', 'application/json');
    readFiles( (items) =>  res.send(items) );
});

app.get('/runtestcases', (req, res) => {
    //here is where we will asyncronously run the test
    runTestCases();
    res.set('Content-Type', 'application/json');
    readFiles( (items) =>  res.send(items) );
});

app.get('/gettestcases', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send(tc);
});

app.use(express.static(images_path));


function readFiles(next){
    fs.readdir(images_path, function(err, items) {
        let testCases = [];
        for (var i=0; i<items.length; i++) {
            testCases.push( {id:items[i]} );
        }
        next(testCases);
    });
}

app.listen(port, () => console.log('Example app listening on port '+ port +'!'))


// TEST RUNNER

function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}


let page;
let browser;

const tc =  // TEST CONFIGURATION
    {
        folder: 'test/current',
        url:'http://localhost:4200',
        page_width: 1920,
        page_height: 1080,

        tests:[
            { id:'1-select_hero_narco',
                name: 'select_hero_narco',
                action: 'click',
                selector: '#Narco',
                expectation: 'see hero screen',
                pass: 'OK',
                prediction: 'NO',
                warnings: ""
            },
            { id:'2-select_name_field',
                name: 'select_name_field',
                action: 'click',
                selector: '#hero-detail-name',
                expectation: 'hero name gets highligted',
                pass: '?',
                prediction: 'OK',
                warnings: ""
            },
            { id:'3-type_name',
                name: 'type_name',
                action: 'type',
                selector: '#hero-detail-name',
                value: 'Batman',
                expectation: 'batnman got types in',
                pass: 'OK',
                prediction: 'OK',
                warnings: ""},
            { id:'4-save_hero_detail',
                name: 'save_hero_detail',
                action: 'click',
                selector: '#hero-detail-save',
                expectation: 'new name got saved',
                pass: '?',
                prediction: 'NO',
                warnings: ""},
            { id:'5-got_to_initial_page',
                name: 'got_to_initial_page',
                action: 'gotohome',
                selector: '#top-heroes',
                expectation: 'see home page',
                pass: 'NO',
                prediction: 'NO',
                warnings: ""},
            { id:'6-see_list_of_heroes',
                name: 'see_list_of_heroes',
                action: 'click',
                selector: '#menu_link_heroes',
                expectation: 'see list of heroes',
                pass: 'NO',
                prediction: 'NO',
                warnings: ""}

            //    await page.click("#menu_link_heroes");
        ]
    };

function imageFileName(test, folder) {
    return folder + "/" + test.id  + ".png";
}

async function runTestCases() {

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
    await page.screenshot({path: tc.folder + '/0-landing_page.png'});

    for( const test of tc.tests ){
        await page.waitForSelector(test.selector);
        if (test.action === 'click'){
            await page.click(test.selector);
        } else if (test.action === 'type'){
            await page.type(test.selector,test.value);
        }  else if (test.action === 'gotohome'){
            await page.goto(tc.url);
            await page.waitForSelector(test.selector);
        }
        await page.screenshot({path:imageFileName(test, tc.folder)});
        await delay(1000);
    }
    await delay(10000);
    await browser.close();
    return  "Test Cases Done"

};
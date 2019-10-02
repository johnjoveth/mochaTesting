const { Builder, By, until, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { assert } = require('chai');
const colors = require('colors');

const path = require('chromedriver').path;

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
// var mocha = new Mocha({
//     reporter: 'mocha-junit-reporter',
//     reporterOptions: {
//         testCaseSwitchClassnameAndName: true,
//         jenkinsMode: true
//     }       
// });
describe('Access Website',async function(){
    this.timeout(8000)
    before(async function(){
        driver = await new Builder()
            .forBrowser('chrome')
            // .setChromeOptions(new chrome.Options().addArguments('--headless')) //Make a headless test
            // .usingServer('http://localhost:4445/wd/hub')
            .build();
    })
    beforeEach(async function(){
        await driver.get('https://google.com');
    })

    after(async function(){
        await driver.quit()
    })
    it('Should open the links',async function(){
        // await driver.findElement(By.id('loginEmail')).sendKeys('admin@dxc.com');
        // await driver.findElement(By.id('loginPassword')).sendKeys('adminpassword', Key.RETURN);
        let url = await driver.wait(until.urlContains('google'), 1000)  
        // assert.deepEqual(url, true, 'Im now inside the dashboard')
        assert.deepEqual(url, true, "success")
    })
    // it('Should give an alert if incorrect username/password', async function(){
    //     await driver.findElement(By.id('loginEmail')).sendKeys('');
    //     await driver.findElement(By.id('loginPassword')).sendKeys('', Key.RETURN);
    //         let message = await driver.switchTo().alert().getText();
    //         assert.deepEqual(message, 'Invalid Username/Password')
    // })
})
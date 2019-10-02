const { Builder, By, until, Key } = require('selenium-webdriver');
const { assert } = require('chai');
const colors = require('colors');

const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;


const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
(async function openChrome(){
    let driver = await new Builder()
                .forBrowser('chrome')
                // .usingServer('http://localhost:4445/wd/hub')
                .build();
            console.clear()
            console.log("\n=========================================================================")
            console.log(" TESTCASE 1: If I'm a user, I will be able to login using my credentials ".cyan)
            console.log("=========================================================================")
        try {
            console.log('\nLOGGING IN...\n'.blue)
            await driver.get('https://google.com')
            // await driver.wait(until.urlContains('myskill'), 1000)
            .then(r => console.log(' TESTCASE 1 | PASSED '.bgGreen.black))      
        }
        catch(err){
            return console.log(' TESTCASE | FAILED '.bgRed, `\nerror message: ${err.message}`)
        }
        // finally {
        //     await driver.quit()
        // }

})()
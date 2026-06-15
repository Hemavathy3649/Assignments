import test from "@playwright/test"
test("Salesforce Storage State",async({page})=>{

    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.waitForTimeout(2000)
    const homepagetitle=await page.title()
    console.log("Home Page Title is: "+homepagetitle)

    await page.context().storageState({path:'Data/SF_Login.json'})

})
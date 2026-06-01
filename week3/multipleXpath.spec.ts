import test from'@playwright/test'

test("Multiple Xpathes",async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("//input[contains(@id,'user')]").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[contains(@id,'pass')]").fill("TestLeaf@2025")
    await page.locator("//input[@name='Login']").click()
})
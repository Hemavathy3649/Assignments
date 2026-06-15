import test, { expect } from '@playwright/test'

test.use({storageState:"Data/SF_Login.json"})
test("Home Page",async({page})=>{
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    await page.locator(".slds-icon-waffle").click()
    await page.getByLabel("View All Applications").click()
})

test("Sales",async({page})=>{
    test.slow()
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    await page.locator(".slds-icon-waffle").click()
    await page.getByLabel("View All Applications").click()
    await page.locator('//p[@class="slds-truncate"]').nth(6).click()
    await page.locator("//a[text()='View Accounts']").click()
    
})
test.fail("Account Page title isinvalid", async({page}) => {

    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
     await page.locator("//span[text()='Accounts']").nth(0).click();
    const pageTitle =  page.title()
    await expect(pageTitle).toBe('Recently Viewed | Home | Salesforce')
})

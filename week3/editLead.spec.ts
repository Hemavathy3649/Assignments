import test from '@playwright/test'

test("Edit Lead",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr")
    await page.locator("#password").fill("crmsfa")
    await page.locator("//input[@type='submit']").click()
    await page.waitForTimeout(3000)
    await page.locator(`text='CRM/SFA'`).click()
    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Leads']").click()
    await page.locator(`text='Create Lead'`).click()

    await page.locator("#createLeadForm_companyName").fill("Amazon")
    await page.waitForTimeout(3000)
    await page.locator("[name='firstName']").last().fill("Hems")
    await page.locator("#createLeadForm_lastName").fill("G")
    await page.locator("[name='submitButton']").click()
    await page.locator(`text='Edit'`).click()
    await page.waitForTimeout(3000)
    
    await page.locator("#updateLeadForm_companyName").fill("Test")
    await page.locator("[name='submitButton']").first()


})
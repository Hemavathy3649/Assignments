import test from '@playwright/test'

test("Create Lead",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr")
    await page.locator("#password").fill("crmsfa")
    await page.locator("//input[@type='submit']").click()
    await page.waitForTimeout(3000)
    await page.locator(`text='CRM/SFA'`).click()
    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Leads']").click()
    await page.locator(`text='Create Lead'`).click()
    await page.locator(".inputBox").first().fill("testleaf")
    //await page.waitForTimeout(3000)
    await page.locator("#createLeadForm_firstName").fill("Hemavathy")
    //await page.waitForTimeout(3000)
    await page.locator("#createLeadForm_lastName").fill("Paulraj")
    //await page.waitForTimeout(3000)
    await page.locator("#createLeadForm_personalTitle").fill("Miss")
    //await page.waitForTimeout(3000)
    await page.locator("[name='generalProfTitle']").fill("QA")
    //await page.waitForTimeout(3000)
    await page.locator("#createLeadForm_annualRevenue").fill("600000")
    //await page.waitForTimeout(3000)
    await page.locator("[name='departmentName']").fill("Software Testing")
    //await page.waitForTimeout(3000)
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("123434323")
    await page.waitForTimeout(3000)
    await page.locator(".smallSubmit").click()



})
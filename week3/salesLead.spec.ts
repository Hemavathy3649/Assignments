import test from '@playwright/test'
 test("Sales Lead",async({page})=>{

    await page.goto("https://login.salesforce.com")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("[id='password']").fill("TestLeaf@2025")
    await page.locator("[type='submit']").click()
    await page.locator("//span[text()='App Launcher']").click()
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.waitForTimeout(3000)
    await page.locator("//p[text() ='Sales']").click()
    await page.locator("//span[text()='Leads']").first().click()
    await page.locator("//div[@title='New']").click()
    await page.locator("//button[@name='salutation']").click()
    await page.locator("//lightning-base-combobox-item[@class ='slds-media slds-listbox__option slds-media_center slds-media_small slds-listbox__option_plain']").nth(1).click()
    await page.locator("[name='lastName']").fill("Hema")
    await page.locator("[name='Company']").fill("TestLeaf")
    await page.locator("//button[@type='button']").last()
    
    
    




 })
import test, { expect } from '@playwright/test'
 test("Create Individual",async({page})=>{

    await page.goto("https://login.salesforce.com")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("[id='password']").fill("TestLeaf@2025")
    await page.locator("[type='submit']").click()
    await page.locator("//span[text()='App Launcher']").click()
    await page.waitForTimeout(3000)
    await page.locator('//button[@aria-label="View All Applications"]').click();
    await page.waitForTimeout(3000)
    await page.locator("//p[text()='Individuals']").click()
    await page.locator("//span[text()='Individuals List']").click()
    await page.locator("//span[text()='New Individual']").click()
    await page.locator("//input[@placeholder='Last Name']").fill("hema")
    await page.waitForTimeout(3000)
    await page.locator("//span[text()='Save']").click()
   
    


 })
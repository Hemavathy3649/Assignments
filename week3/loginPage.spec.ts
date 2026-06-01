/*
Classroom 1:
load this https://leaftaps.com/opentaps/control/main
username: democsr
password: crmsfa
click on login button
click on crm/sfa link
`text='CRM/SFA'`
*/

import test from '@playwright/test'

test("Login Page",async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("democsr")
    await page.locator(".inputLogin").last().fill("crmsfa")
    await page.locator("[type='submit']").click()
    await page.locator(`text='CRM/SFA'`).click()
    await page.waitForTimeout(5000)
    console.log(await page.title())

})
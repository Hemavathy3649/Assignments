import test from '@playwright/test'

test("Page Fixture",async({page})=>{
    await page.goto("https://www.google.com/")
})
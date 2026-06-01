import test, { chromium, webkit } from '@playwright/test'

test("RedBus Login",async()=>{

    const browser=await chromium.launch({channel:'msedge'})

    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.redbus.in/")
    console.log(await page.title())
    console.log(await page.url())


})

test("Flipkart Login",async()=>{

    const browser=await webkit.launch()

    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.flipkart.com/")
    console.log(await page.title())
    console.log(await page.url())


})
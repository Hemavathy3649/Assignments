import test, { expect } from '@playwright/test'

test("Leaf Taps",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/")
    await page.locator("[name='USERNAME']").fill("democsr")
    await page.locator("[name='PASSWORD']").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    const logo=await page.locator("[src='/opentaps_images/opentaps_logo.png']")
    await expect(logo).toBeVisible()
    const title= await page.title()
    console.log("Page title is: "+title)
})

test.fail("Leaf Taps Invalid ID",async({page})=>{
     await page.goto("http://leaftaps.com/opentaps/")
    await page.locator("[name='USERNAME']").fill("Hema")
    await page.locator("[name='PASSWORD']").fill("crmsfa2")
    await page.locator(".decorativeSubmit").click()
    // const logo=await page.locator("[src='/opentaps_images/opentaps_logo.png']")
    //await expect(logo).toBeVisible()
    // const title= await page.title()
    // console.log("Page title is: "+title)
    // expect(title).toBe("TestLeaf")
})

test.fixme("Leaf Taps trying to fix",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/")
    await page.locator("[name='USERNAME']").fill("DemoSalesManager")
    await page.locator("[name='PASSWORD']").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    const logo=await page.locator("[src='/opentaps_images/opentaps_logo.png']")
    await expect(logo).toBeVisible()
    const title= await page.title()
    console.log("Page title is: "+title)

})
test.skip("Leaf Taps trying to skip",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/")
    await page.locator("[name='USERNAME']").fill("DemoSalesManager")
    await page.locator("[name='PASSWORD']").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    const logo=await page.locator("[src='/opentaps_images/opentaps_logo.png']")
    await expect(logo).toBeVisible()
    const title= await page.title()
    console.log("Page title is: "+title)

})

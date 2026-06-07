import test from '@playwright/test'
test("Frames",async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml")
    const totalframes=await page.frames()
    console.log("Total Number of Frames is: "+totalframes.length)
    await page.frameLocator("(//iframe)[1]").locator("#Click").click()
    const msg=await page.frameLocator("(//iframe)[1]").locator("#Click").innerText()
    console.log("Frame Message is: "+msg)
    await totalframes[4].locator("#Click").click()
    const nestedmsg=await totalframes[4].locator("#Click").innerText()
    console.log("Nested Message is: "+nestedmsg)


})
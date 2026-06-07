import test from '@playwright/test'
test("Handling Frames",async({page})=>{

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
 
     page.on("dialog",alert=>{
        console.log(alert.type())
        console.log(alert.message())
        alert.accept()
    })
    await page.waitForTimeout(2000)
    await page.frameLocator("#iframeResult").locator("//button[text()='Try it']").click()
    // await page.waitForTimeout(2000)
    // page.once("dialog",alert=>{
    //     console.log(alert.type())
    //     console.log(alert.message())
    //     alert.accept()
    // })

})
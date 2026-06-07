import test from '@playwright/test'
test("Auto Dismiss",async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("(//span[text()='Show'])[5]").click()
})
test("Page Once Method",async({page})=>{
    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.once("dialog",alert=>{
        console.log(alert.type())
        console.log(alert.message())
        alert.accept()
    })
    await page.locator("(//span[text()='Show'])[1]").click()
    await page.waitForTimeout(3000)
    await page.locator("(//span[text()='Show'])[5]").click()
})

test.only("Page ON Method",async({page})=>{
    await page.goto("https://www.leafground.com/alert.xhtml")
     page.on("dialog", async alertType=>{
const alertTypeValue = alertType.type()
        console.log("Alert Type: ", alertTypeValue)

        const alertMessage = alertType.message()
        console.log("Alert Message: ", alertMessage)

        if(alertTypeValue === "alert") {
            alertType.accept()
        }else if(alertTypeValue === "confirm"){
            alertType.dismiss()
        }else if(alertTypeValue === "prompt"){
            alertType.accept("Playwright Selenium")
        }
    })
    await page.locator("(//span[text()='Show'])[1]").click()
    await page.waitForTimeout(3000)
    await page.locator("(//span[text()='Show'])[2]").click()
    await page.waitForTimeout(3000)
    await page.locator("(//span[text()='Show'])[5]").click()

})
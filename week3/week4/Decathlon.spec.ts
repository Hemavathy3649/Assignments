import test, { expect } from '@playwright/test'
test("Decathlon App",async({page})=>{

    await page.goto("https://www.decathlon.in/")
    const homepagetitle=await page.title()
    console.log(homepagetitle)

    const homepage=await page.getByAltText("NC Banner new CBF mWeb").first()
    await expect(homepage).toBeVisible()
    console.log("User is Navigated to Homepage")

    const searchbox= page.locator("//input[@type='search']")
    await searchbox.click()
    await expect(searchbox).toBeEnabled()
    console.log("Search Box is Enabled")

    await page.locator("//input[@type='search']").fill("Shoes")
    await page.keyboard.press("Enter")
    
    const title = await page.title()
    console.log("The shoes page title is : " + title)
    
    await page.locator("//span[text()='Gender']").click()
    await page.locator("//input[@type='checkbox']").first().click()

    await page.locator("//span[text()='Category']").click()
    await page.locator("//span[text()='Sport shoes']").click() //selecting Football boots
    
    await page.locator("//span[text()='Size']").click()
    await page.locator("//span[text()='Uk 12 - eu 47']").click()

    await page.locator("//span[text()='Sport']").click()
    await page.locator("//span[text()='Running']").click()

    await page.locator("//span[text()='Most relevant']").click()
    await page.locator("//span[text()='Price (low → high) ']").click()

    await page.locator("//span[text()='Kalenji']").first().click()
    //await page.waitForTimeout(3000)
    await page.locator("//span[text()='UK 10.5 - EU 45']").click()
    await page.locator("//span[text()='Add to cart']").click()
    
    const message = await page.locator("//h3[@class='text-[16px]']").textContent()
    expect.soft(message).toBe("Product(s) added to cart")
    console.log("The message on the pop up is : " + message)

    await page.locator("//span[text()='Cart']").click()
   const totalamount= await page.locator("//div[@class='flex justify-between mb-2']").last().innerText()
   console.log("Total amount is: "+totalamount)
    
})
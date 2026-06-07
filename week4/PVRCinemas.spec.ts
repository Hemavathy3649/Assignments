import test, { expect } from '@playwright/test';
test("Booking Tickets",async({page})=>{

    await page.goto("https://www.pvrcinemas.com/")
    await page.locator("//h6[text()='Chennai']").click()
    await page.locator("//span[text()='Cinema']").click()
    await page.locator("//span[text()='Select Cinema']").click()
    await page.locator("//span[text()='PVR Sathyam Royapettah Chennai']").click()
    await page.locator("//span[text()='Tomorrow']").click()
    await page.locator("//span[text()='BLAST']").last().click()
    await page.locator("//span[text()='04:25 PM']").click()
    await page.getByLabel("Submit").click()
    await page.locator("//button[text()='Accept']").click()
    await page.locator("//span[@id='EC.ECONOMY|S:27']").click()
    
    const moviename=page.locator("//h5[text()='BLAST']")
    await expect(moviename).toHaveText('BLAST')

    const amnt=await page.locator(".grand-prices").innerText()
    console.log("Total amount is:"+amnt)

    const seatinfo = await page.locator(".seat-info").innerText()
    console.log(`seat number you booked ${seatinfo}`)

    let title = await page.title()
    console.log(title)
    await expect(page).toHaveTitle("PVR Cinemas")

    await page.locator("//button[text()='Proceed']").click()
    



    

})
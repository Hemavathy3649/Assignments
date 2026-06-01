import test from '@playwright/test'

test("Handle Dropdowns",async({page})=>{

    await page.goto("https://www.telerik.com/contact")
    await page.selectOption('#Dropdown-1',{label:'Licensing/Pricing/Quotes'})
    await page.waitForTimeout(2000)
    await page.selectOption("select[id='Dropdown-2']",{value:'DevCraft'})
    await page.waitForTimeout(2000)
    await page.selectOption('#Country-1',{index:5})

})
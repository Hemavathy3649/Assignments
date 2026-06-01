/*Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Individuals tab
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name
*/
import test, { expect } from '@playwright/test'
test("Edit Individual",async({page})=>{

    await page.goto('https://login.salesforce.com');
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('[name="pw"]').fill('TestLeaf@2025');
    await page.locator('input[name="Login"]').click();
    await page.waitForTimeout(3000);
    await page.locator("//div//span[contains(text(),'App Launcher')]").click()
    await page.waitForTimeout(3000)
    await page.locator("//button[@aria-label='View All Applications']").click()
    await page.waitForTimeout(3000)
    await page.locator("//p[text()='Individuals']").click()
    await page.waitForTimeout(2000)
    await page.locator("//span[text()='Individuals']").first().click()
    await page.waitForTimeout(2000)
    await page.locator("//input[@name='Individual-search-input']").fill("hems")
    await page.keyboard.press("Enter")
    await page.locator("//a[@title='Hema hems']").click()
    await page.locator("//div[@title='Edit']").click()
    await page.locator("//a[@class='select']").first().click()
    await page.getByText("Mrs.")
    await page.locator("//input[@placeholder='First Name']").fill("Hemavathy")
    await page.locator("//span[text()='Save']").click()

     const firstNameDisplay = page.locator("//span[text()='Mrs. Hemavathy hems']"); 

  // 3. Verify the text matches the expected value
  await expect(firstNameDisplay).toHaveText('Mrs. Hemavathy hems');

    


       
}
)
import test, { expect } from'@playwright/test'
test("File Upload",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("TestData/Hemavathy Resume.pdf")
    const fileChooserPromise = page.waitForEvent('filechooser')
    await page.locator("#drag-drop-upload").click()
   const fileChooser = await fileChooserPromise
  await fileChooser.setFiles('TestData/the-blowup-UN4PadDppAU-unsplash.jpg');
    const imgname=await page.locator('//div[@class="dz-filename"]').first().innerText()
    console.log("The Image name is:"+imgname)
    await expect(imgname).toBe("the-blowup-UN4PadDppAU-unsplash.jpg")
})
test.only("File Download",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/download")
    const filepromise=page.waitForEvent('download')
    await page.locator("//a[text()='test_upload.pdf']").click()
    const downloadfile=await filepromise
    const filename=downloadfile.suggestedFilename()
    await downloadfile.saveAs('TestData/'+filename)
    await expect(filename).toBe("test_upload.pdf")
    console.log("File name is :"+filename)

})
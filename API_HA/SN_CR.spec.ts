import test, { expect } from '@playwright/test'
let username="admin"
let password="E7i*7wNgX*mM"
let login=`${username}:${password}`
//btoa
let loginInfo=btoa(login)//convert decode to encode
console.log(loginInfo)

test("Create Change Request",async({request})=>{

    let postrequest=await request.post("https://dev296651.service-now.com/api/now/table/change_request",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Basic ${loginInfo}`
        },
        data:{
            "short_description":"Create a new request via playwright"
        }
    })
    let postresponse=await postrequest.json()
    console.log(postresponse)
    expect(postrequest.statusText()).toBe("Created")


})
test("Get Change Request",async({request})=>{

    let getrequest=await request.get("https://dev296651.service-now.com/api/now/table/change_request/ecb2262783e98b5442bdeec0deaad328",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Basic ${loginInfo}`
        },
        
    })
    let getresponse=await getrequest.json()
    console.log(getresponse)
    expect(getrequest.statusText()).toBe("OK")


})
test("Update Change Request",async({request})=>{

    let updaterequest=await request.patch("https://dev296651.service-now.com/api/now/table/change_request/ecb2262783e98b5442bdeec0deaad328",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Basic ${loginInfo}`
        },
        data:{
            "short_description":"Updating a request request via playwright"
        }
        
    })
    let updateresponse=await updaterequest.json()
    console.log(updateresponse)
    expect(updaterequest.statusText()).toBe("OK")


})
test.only("Delete Change Request",async({request})=>{

    let delrequest=await request.delete("https://dev296651.service-now.com/api/now/table/change_request/ecb2262783e98b5442bdeec0deaad328",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Basic ${loginInfo}`
        },
        
    })
    expect(delrequest.statusText()).toBe("No Content")


})
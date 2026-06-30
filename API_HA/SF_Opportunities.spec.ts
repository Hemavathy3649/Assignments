import test, { expect } from '@playwright/test'
//Creating global variable for access_token,tokentype,instance_url,sys_id and opp_id
let Sys_ID:any
let Access_Token:any
let Instance_Url:any
let Token_Type:any
let opp_ID:any
//Generating a token
test("Generate Token",async({request})=>{

    let tokens=await request.post('https://login.salesforce.com/services/oauth2/token',{
        headers:{
            "Content-Type":"application/x-www-form-urlencoded",
            "Connection":"keep-alive"
        },
        form:{
            "grant_type":"password",
            "username":"hemabaga.5a040a8896a5@agentforce.com",
            "password":"Hema@3649En7ceBjNuykxNbxT90nqb05L",
            "client_id":"3MVG9GCMQoQ6rpzTvQpTuHHO193qGN9erC56GGbCu.k27cSyYpBJZxC0FAVVbvTF7W.zJ7biTGeyR0ABgGXfF",
            "client_secret":"B8061B7F370F127AD3D348A16CCACCE7285B9D6D9900A98EA28B7172C986C99B"
        }
        
    })
    let response=await tokens.json()
    console.log(response)
    Sys_ID=await response.id
    Access_Token=await response.access_token
    Instance_Url=await response.instance_url
    Token_Type=await response.token_type

})
//Creating an new Opportuity
test("Create New Opportunity",async({request})=>{
let createrequest=await request.post(`${Instance_Url}/services/data/v67.0/sobjects/Opportunity`,{
headers:{
    "Content-Type":"application/json",
    "Authorization":`${Token_Type} ${Access_Token}`
},
data:{
   
    "Name":"Selenium Automation",
    "CloseDate":"2026-07-05",
    "StageName":"Need Analysis"
}
})


let createoppresponse= await createrequest.json()
console.log(createoppresponse)
opp_ID=createoppresponse.id//storing the created ID in opp_ID
console.log(opp_ID)
expect(createrequest.status()).toBe(201)
expect(createoppresponse.id).toEqual(opp_ID)
})
//Updating the Opportunity
test("Updating Opportunity",async({request})=>{
    let updaterequest=await request.patch(`${Instance_Url}/services/data/v67.0/sobjects/Opportunity/${opp_ID}`,{
        headers:{
           "Content-Type":"application/json",
    "Authorization":`${Token_Type} ${Access_Token}` 
        },
        data:{
    "Type":"New Customer",
    "StageName":"Prospecting"
        }
    })
    let updateresponse=await updaterequest.status()
    console.log(updateresponse)
    expect(updateresponse).toBe(204)
})
//Getting the opportunity details after updating
test("Get Opportunity",async({request})=>{
    let getrequest=await request.get(`${Instance_Url}/services/data/v67.0/sobjects/Opportunity/${opp_ID}`,{

        headers:{
    "Content-Type":"application/json",
    "Authorization":`${Token_Type} ${Access_Token}`
},
    })
    let getresponse=await getrequest.json()
    console.log(getresponse)
    expect(getrequest.status()).toBe(200)
    expect(getresponse.Id).toEqual(opp_ID)
    expect(getresponse.StageName).toBe("Prospecting")
})
//Deleting opportunity
test("Delete Opportunity",async({request})=>{
    let deleteOpprequest=await request.delete(`${Instance_Url}/services/data/v67.0/sobjects/Opportunity/${opp_ID}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`${Token_Type}${Access_Token}`
        }
        
    })
    let deleteOppresponse=await deleteOpprequest.status()
    expect(deleteOppresponse).toBe(401)
})
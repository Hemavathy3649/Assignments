let a="listen"
let b=`silent`
isAnagram(a,b)
function isAnagram(v1,v2)
{
    let c=a.trim().toLowerCase().split("").sort().toString()
    console.log(c)
    let d=b.trim().toLowerCase().split("").sort().toString()
    console.log(d)
    if(c===d)
    {
        console.log("True")
    }
    else{
        console.log("False")
    }
}
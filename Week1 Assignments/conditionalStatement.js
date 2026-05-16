function launchBrowswer(browserName)
{
    
    if(browserName=='Chrome')
    {
        console.log("Launch the browser")
    }
    else
    {
        console.log("TearDown the browser")
    }
}
launchBrowswer('Firefox')

function runTest(testType)
{
    switch(testType)
    {
        case "sanity":console.log("Run Sanity check")
        break;
        case "regression":console.log("Run Full Regression suite")
        break;
        case "unit": console.log("Run unit testing")
        default: console.log("Run smoke test")
        break;
    }
}
runTest()
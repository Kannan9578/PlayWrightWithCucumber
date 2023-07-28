const reporter=require('cucumber-html-reporter')
var date=new Date();
var testEnv="QA";
var currentDate= date.getDate()+'_'+(date.getMonth()+1)+'_'+(date.getFullYear())+'_'+(date.getHours())+'_'+(date.getMinutes());

var options={
    theme:"bootstrap",
    name:"Test Automation Report",
    brandTitle:"SK Technologies Pvt Ltd",
    jsonFile:"./src/tests/Reporter/cucumber.json",
    // output:"./src/tests/Reporter/cucumber_html_"+currentDate+".html",
    output:"./src/tests/Reporter/cucumber_html.html",
    screenshortsDirectory:"./src/tests/screenshots/",
    storeScreenshots: true,
    scenarioTimestamp: true,
    reportSuiteAsScenarios: true,
    title:"",
    lunchReport:true,
    metadata:{
        "App Version":"1.0",
        "Test Environment":testEnv,
        "Platform":"Web/ReactJS",
        "Sprint":"003",
        "Author":"A S Kannan"
    }
}

reporter.generate(options);

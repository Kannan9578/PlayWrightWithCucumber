let options=[
    '--require cucumber.node.js',
    '--require-module ts-node/register',
    '--require ./src/main/steps/*.step.ts',
    '--require ./src/main/utils/hooks.ts',
    '==format progress',
    '--format json:./src/tests/Reporter/cucumber.json',
    // '--format message:./src/tests/Reporter/cucumber-html-reporter.ndjson',
    '--publish-quiet',
    '--format html --format @cucumber/pretty-formatter' 
   
].join(' ');
let run_features=[
    './src/tests/features',
    options
].join(' ')

module.exports={
    test_runner:run_features
}

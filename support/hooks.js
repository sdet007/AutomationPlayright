const { setDefaultTimeout ,Before, After } = require('@cucumber/cucumber');
setDefaultTimeout(30000);

Before(async function () {
  console.log('Starting scenario...');
});


After(async function () {
  console.log('Scenario complete.');
});

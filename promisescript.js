const axios = require('axios');
const get = (url) => {axios.get(url)
    .then(function (response) {    
        console.log(response.data);
    })
    .catch(function (error) {    
        console.log(error);
    })
    .finally(function () {    
    })}
// Task 13
get("https://jethoetang-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/title/Things%20Fall%20Apart");
// Task 12
get("https://jethoetang-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/author/Jane%20Austen");
// Task 11
get("https://jethoetang-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/isbn/1");
// Task 10
get("https://jethoetang-5000.theianext-1-labs-prod-misc-tools-us-east-0.proxy.cognitiveclass.ai/");
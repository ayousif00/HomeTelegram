var Client = require("ibmiotf");
var config = {
 "org" : process.env.BLUEMIX_ORG,
 "id" : process.env.BLUEMIX_DEVICE_ID,
 "domain": "internetofthings.ibmcloud.com",
 "type" : process.env.BLUEMIX_DEVICE_TYPE,
 "auth-method" : process.env.BLUEMIX_AUTH_METHOD,
 "auth-token" : process.env.BLUEMIX_AUTH_TOKEN
};

var deviceClient = new Client.IotfDevice(config);

deviceClient.connect();

deviceClient.on("connect", function () {
 //publishing event using the default quality of service
 deviceClient.publish("status","json",'{"d" : { "Temperature" : 25.4 }}');
});
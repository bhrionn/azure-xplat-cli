// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"c0c1bb1b-9b9b-4141-8d87-ea75c2d9afd8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/8\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '396',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c0c1bb1b-9b9b-4141-8d87-ea75c2d9afd8"',
  'x-ms-request-id': '4f94b923-5571-4e2c-9ba3-ea4b5156c8f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '5315227e-61e3-46b9-8731-6987336d574a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142031Z:5315227e-61e3-46b9-8731-6987336d574a',
  date: 'Fri, 10 Mar 2017 14:20:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"c0c1bb1b-9b9b-4141-8d87-ea75c2d9afd8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/8\",\r\n    \"nextHopType\": \"VirtualNetworkGateway\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '396',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c0c1bb1b-9b9b-4141-8d87-ea75c2d9afd8"',
  'x-ms-request-id': '4f94b923-5571-4e2c-9ba3-ea4b5156c8f0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '5315227e-61e3-46b9-8731-6987336d574a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142031Z:5315227e-61e3-46b9-8731-6987336d574a',
  date: 'Fri, 10 Mar 2017 14:20:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"77dcf899-48cd-4dd2-b0cf-93b5e08f5d16\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"11.0.0.0/8\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '383',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '7fa56b79-ca8b-4ab6-946e-683ad0e1940f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/7fa56b79-ca8b-4ab6-946e-683ad0e1940f?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5148d44f-e53e-4ff2-8607-be8cff84fd8e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142033Z:5148d44f-e53e-4ff2-8607-be8cff84fd8e',
  date: 'Fri, 10 Mar 2017 14:20:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"77dcf899-48cd-4dd2-b0cf-93b5e08f5d16\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"addressPrefix\": \"11.0.0.0/8\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '383',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '7fa56b79-ca8b-4ab6-946e-683ad0e1940f',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/7fa56b79-ca8b-4ab6-946e-683ad0e1940f?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5148d44f-e53e-4ff2-8607-be8cff84fd8e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142033Z:5148d44f-e53e-4ff2-8607-be8cff84fd8e',
  date: 'Fri, 10 Mar 2017 14:20:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/7fa56b79-ca8b-4ab6-946e-683ad0e1940f?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '85e30077-7945-41c9-b8cd-6ce34692da39',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '51c25486-90cf-4351-8d56-07fd7a7204fb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142104Z:51c25486-90cf-4351-8d56-07fd7a7204fb',
  date: 'Fri, 10 Mar 2017 14:21:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/7fa56b79-ca8b-4ab6-946e-683ad0e1940f?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '85e30077-7945-41c9-b8cd-6ce34692da39',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '51c25486-90cf-4351-8d56-07fd7a7204fb',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142104Z:51c25486-90cf-4351-8d56-07fd7a7204fb',
  date: 'Fri, 10 Mar 2017 14:21:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"9736fbc8-7965-4be9-ade8-356d19908b36\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"11.0.0.0/8\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '384',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9736fbc8-7965-4be9-ade8-356d19908b36"',
  'x-ms-request-id': '92397acc-ad29-4658-8b36-6a1b99634ae9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '7fe7cb15-9508-4e51-9078-ae0c21efadd0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142105Z:7fe7cb15-9508-4e51-9078-ae0c21efadd0',
  date: 'Fri, 10 Mar 2017 14:21:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"routeName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/routeName\",\r\n  \"etag\": \"W/\\\"9736fbc8-7965-4be9-ade8-356d19908b36\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"11.0.0.0/8\",\r\n    \"nextHopType\": \"VnetLocal\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '384',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9736fbc8-7965-4be9-ade8-356d19908b36"',
  'x-ms-request-id': '92397acc-ad29-4658-8b36-6a1b99634ae9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '7fe7cb15-9508-4e51-9078-ae0c21efadd0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170310T142105Z:7fe7cb15-9508-4e51-9078-ae0c21efadd0',
  date: 'Fri, 10 Mar 2017 14:21:04 GMT',
  connection: 'close' });
 return result; }]];

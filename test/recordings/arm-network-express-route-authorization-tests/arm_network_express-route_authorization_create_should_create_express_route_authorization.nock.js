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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-express-route-circuit-auth?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-express-route-circuit-auth' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-request-id': '9edcd06b-5bc5-4e16-b6a3-f5fee92626c4',
  'x-ms-correlation-request-id': '9edcd06b-5bc5-4e16-b6a3-f5fee92626c4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095224Z:9edcd06b-5bc5-4e16-b6a3-f5fee92626c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 27 Apr 2017 09:52:24 GMT',
  connection: 'close',
  'content-length': '129' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-express-route-circuit-auth?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplat-test-express-route-circuit-auth' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-request-id': '9edcd06b-5bc5-4e16-b6a3-f5fee92626c4',
  'x-ms-correlation-request-id': '9edcd06b-5bc5-4e16-b6a3-f5fee92626c4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095224Z:9edcd06b-5bc5-4e16-b6a3-f5fee92626c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 27 Apr 2017 09:52:24 GMT',
  connection: 'close',
  'content-length': '129' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-express-route-circuit-auth?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth\",\"name\":\"xplat-test-express-route-circuit-auth\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '237',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '391043de-7fd3-43c6-be20-08db4395ff00',
  'x-ms-correlation-request-id': '391043de-7fd3-43c6-be20-08db4395ff00',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095226Z:391043de-7fd3-43c6-be20-08db4395ff00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 27 Apr 2017 09:52:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourcegroups/xplat-test-express-route-circuit-auth?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth\",\"name\":\"xplat-test-express-route-circuit-auth\",\"location\":\"eastus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '237',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '391043de-7fd3-43c6-be20-08db4395ff00',
  'x-ms-correlation-request-id': '391043de-7fd3-43c6-be20-08db4395ff00',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095226Z:391043de-7fd3-43c6-be20-08db4395ff00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 27 Apr 2017 09:52:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/test-circuit' under resource group 'xplat-test-express-route-circuit-auth' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '64366435-dc56-488e-ad40-870037302bad',
  'x-ms-correlation-request-id': '64366435-dc56-488e-ad40-870037302bad',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095227Z:64366435-dc56-488e-ad40-870037302bad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 27 Apr 2017 09:52:27 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/expressRouteCircuits/test-circuit' under resource group 'xplat-test-express-route-circuit-auth' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '64366435-dc56-488e-ad40-870037302bad',
  'x-ms-correlation-request-id': '64366435-dc56-488e-ad40-870037302bad',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095227Z:64366435-dc56-488e-ad40-870037302bad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 27 Apr 2017 09:52:27 GMT',
  connection: 'close',
  'content-length': '192' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"1031069f-2ffd-4d1e-b780-01401734e625\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"baa6695f-d152-4b2d-8648-174481c11070\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1037',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '74cfead6-469b-4ba3-b0ae-ba72f10dfdeb',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/74cfead6-469b-4ba3-b0ae-ba72f10dfdeb?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '75a50165-8467-4c57-b831-e9bbb9674e77',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095230Z:75a50165-8467-4c57-b831-e9bbb9674e77',
  date: 'Thu, 27 Apr 2017 09:52:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"1031069f-2ffd-4d1e-b780-01401734e625\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"baa6695f-d152-4b2d-8648-174481c11070\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Disabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"serviceKey\": \"00000000-0000-0000-0000-000000000000\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1037',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '74cfead6-469b-4ba3-b0ae-ba72f10dfdeb',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/74cfead6-469b-4ba3-b0ae-ba72f10dfdeb?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '75a50165-8467-4c57-b831-e9bbb9674e77',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095230Z:75a50165-8467-4c57-b831-e9bbb9674e77',
  date: 'Thu, 27 Apr 2017 09:52:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/74cfead6-469b-4ba3-b0ae-ba72f10dfdeb?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '134dc6b5-38ba-4d92-b9ae-34208b47eacd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-correlation-request-id': 'c8fa49bb-be10-42b2-adda-76bb484abd89',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095301Z:c8fa49bb-be10-42b2-adda-76bb484abd89',
  date: 'Thu, 27 Apr 2017 09:53:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/74cfead6-469b-4ba3-b0ae-ba72f10dfdeb?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '134dc6b5-38ba-4d92-b9ae-34208b47eacd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14971',
  'x-ms-correlation-request-id': 'c8fa49bb-be10-42b2-adda-76bb484abd89',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095301Z:c8fa49bb-be10-42b2-adda-76bb484abd89',
  date: 'Thu, 27 Apr 2017 09:53:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/74cfead6-469b-4ba3-b0ae-ba72f10dfdeb?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb6c15b4-42b5-43f4-81cd-cf07df7c9463',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '4b117f48-e3d3-4a9c-8e45-322f9b8de110',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095332Z:4b117f48-e3d3-4a9c-8e45-322f9b8de110',
  date: 'Thu, 27 Apr 2017 09:53:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/74cfead6-469b-4ba3-b0ae-ba72f10dfdeb?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb6c15b4-42b5-43f4-81cd-cf07df7c9463',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '4b117f48-e3d3-4a9c-8e45-322f9b8de110',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095332Z:4b117f48-e3d3-4a9c-8e45-322f9b8de110',
  date: 'Thu, 27 Apr 2017 09:53:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"086f7634-7203-4ffb-a128-67a38cf8cb24\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"baa6695f-d152-4b2d-8648-174481c11070\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"f16c7dd8-eb87-4d5c-949a-8aac5cfe0d3e\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1068',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd6c499f5-7a2b-4dfb-a5a9-f545ac816edc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '42e7237c-443d-497b-82e3-0b8ec07c678e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095333Z:42e7237c-443d-497b-82e3-0b8ec07c678e',
  date: 'Thu, 27 Apr 2017 09:53:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-circuit\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit\",\r\n  \"etag\": \"W/\\\"086f7634-7203-4ffb-a128-67a38cf8cb24\\\"\",\r\n  \"type\": \"Microsoft.Network/expressRouteCircuits\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"baa6695f-d152-4b2d-8648-174481c11070\",\r\n    \"peerings\": [],\r\n    \"authorizations\": [],\r\n    \"serviceProviderProperties\": {\r\n      \"serviceProviderName\": \"InterCloud\",\r\n      \"peeringLocation\": \"London\",\r\n      \"bandwidthInMbps\": 100\r\n    },\r\n    \"circuitProvisioningState\": \"Enabled\",\r\n    \"allowClassicOperations\": false,\r\n    \"gatewayManagerEtag\": \"\",\r\n    \"serviceKey\": \"f16c7dd8-eb87-4d5c-949a-8aac5cfe0d3e\",\r\n    \"serviceProviderProvisioningState\": \"NotProvisioned\"\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Standard_MeteredData\",\r\n    \"tier\": \"Standard\",\r\n    \"family\": \"MeteredData\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1068',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd6c499f5-7a2b-4dfb-a5a9-f545ac816edc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '42e7237c-443d-497b-82e3-0b8ec07c678e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095333Z:42e7237c-443d-497b-82e3-0b8ec07c678e',
  date: 'Thu, 27 Apr 2017 09:53:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '298',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a30bd471-187a-45cb-b58f-f60170b9ab4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'd1e4ed47-e75b-413a-89b8-200fcaa257af',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095334Z:d1e4ed47-e75b-413a-89b8-200fcaa257af',
  date: 'Thu, 27 Apr 2017 09:53:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '298',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a30bd471-187a-45cb-b58f-f60170b9ab4e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'd1e4ed47-e75b-413a-89b8-200fcaa257af',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095334Z:d1e4ed47-e75b-413a-89b8-200fcaa257af',
  date: 'Thu, 27 Apr 2017 09:53:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"0f9e79a1-378a-4814-bea2-112c34cad35d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"authorizationKey\": \"44325fd2-e24a-4302-bc9e-0189427f897b\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '459',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '0ae8f5f7-dd7d-4666-b3af-7d3784d728ba',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/0ae8f5f7-dd7d-4666-b3af-7d3784d728ba?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '10de9dc1-9f46-4419-b323-13226d4aacbe',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095336Z:10de9dc1-9f46-4419-b323-13226d4aacbe',
  date: 'Thu, 27 Apr 2017 09:53:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"0f9e79a1-378a-4814-bea2-112c34cad35d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"authorizationKey\": \"44325fd2-e24a-4302-bc9e-0189427f897b\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '459',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '0ae8f5f7-dd7d-4666-b3af-7d3784d728ba',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/0ae8f5f7-dd7d-4666-b3af-7d3784d728ba?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '10de9dc1-9f46-4419-b323-13226d4aacbe',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095336Z:10de9dc1-9f46-4419-b323-13226d4aacbe',
  date: 'Thu, 27 Apr 2017 09:53:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/0ae8f5f7-dd7d-4666-b3af-7d3784d728ba?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '79781387-12e8-4bfc-92bc-7c3657346c7d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '6292e97e-68c6-4ca0-bf53-e84eed52c739',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095407Z:6292e97e-68c6-4ca0-bf53-e84eed52c739',
  date: 'Thu, 27 Apr 2017 09:54:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/0ae8f5f7-dd7d-4666-b3af-7d3784d728ba?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '79781387-12e8-4bfc-92bc-7c3657346c7d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '6292e97e-68c6-4ca0-bf53-e84eed52c739',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095407Z:6292e97e-68c6-4ca0-bf53-e84eed52c739',
  date: 'Thu, 27 Apr 2017 09:54:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"b57b7a95-e5f6-4e2c-8f80-5a827b60d0a6\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"44325fd2-e24a-4302-bc9e-0189427f897b\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd5c59276-ca2c-420e-94cc-78c807bf7a9d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'a3d5c910-85e3-4c86-8216-f2dbd2c34ea1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095408Z:a3d5c910-85e3-4c86-8216-f2dbd2c34ea1',
  date: 'Thu, 27 Apr 2017 09:54:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-auth\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-express-route-circuit-auth/providers/Microsoft.Network/expressRouteCircuits/test-circuit/authorizations/test-auth\",\r\n  \"etag\": \"W/\\\"b57b7a95-e5f6-4e2c-8f80-5a827b60d0a6\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"44325fd2-e24a-4302-bc9e-0189427f897b\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '460',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd5c59276-ca2c-420e-94cc-78c807bf7a9d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'a3d5c910-85e3-4c86-8216-f2dbd2c34ea1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170427T095408Z:a3d5c910-85e3-4c86-8216-f2dbd2c34ea1',
  date: 'Thu, 27 Apr 2017 09:54:07 GMT',
  connection: 'close' });
 return result; }]];

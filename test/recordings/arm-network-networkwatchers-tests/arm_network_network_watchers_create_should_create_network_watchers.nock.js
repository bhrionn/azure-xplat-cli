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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkWatchers/networkWatchersName' under resource group 'xplat-test-watcher' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '72ea0cff-ac4f-4d5b-9105-e15ad37cdea6',
  'x-ms-correlation-request-id': '72ea0cff-ac4f-4d5b-9105-e15ad37cdea6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104043Z:72ea0cff-ac4f-4d5b-9105-e15ad37cdea6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 15 Feb 2017 10:40:43 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkWatchers/networkWatchersName' under resource group 'xplat-test-watcher' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '72ea0cff-ac4f-4d5b-9105-e15ad37cdea6',
  'x-ms-correlation-request-id': '72ea0cff-ac4f-4d5b-9105-e15ad37cdea6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104043Z:72ea0cff-ac4f-4d5b-9105-e15ad37cdea6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 15 Feb 2017 10:40:43 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"networkWatchersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName\",\r\n  \"etag\": \"W/\\\"7c65e236-ea63-40fb-945b-a5591262a604\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '03a132ce-40ae-499f-a05e-a527f8a2296b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/03a132ce-40ae-499f-a05e-a527f8a2296b?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '1c871bae-3906-4660-99ed-cbfd5f57de4c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104047Z:1c871bae-3906-4660-99ed-cbfd5f57de4c',
  date: 'Wed, 15 Feb 2017 10:40:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"networkWatchersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName\",\r\n  \"etag\": \"W/\\\"7c65e236-ea63-40fb-945b-a5591262a604\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '03a132ce-40ae-499f-a05e-a527f8a2296b',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/03a132ce-40ae-499f-a05e-a527f8a2296b?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '1c871bae-3906-4660-99ed-cbfd5f57de4c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104047Z:1c871bae-3906-4660-99ed-cbfd5f57de4c',
  date: 'Wed, 15 Feb 2017 10:40:47 GMT',
  connection: 'close' });
 return result; }]];

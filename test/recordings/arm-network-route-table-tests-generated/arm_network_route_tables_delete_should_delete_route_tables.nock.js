// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"c1bb3595-a035-4c1f-980a-ae24646fb896\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a624a1c8-22ca-40b8-860e-62051c1e326c\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c1bb3595-a035-4c1f-980a-ae24646fb896"',
  'x-ms-request-id': '22aa78a6-b226-4925-9da2-21eaad97f8d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '39899d4f-5c17-4c27-9666-191580654d9f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T101024Z:39899d4f-5c17-4c27-9666-191580654d9f',
  date: 'Mon, 07 Aug 2017 10:10:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"c1bb3595-a035-4c1f-980a-ae24646fb896\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a624a1c8-22ca-40b8-860e-62051c1e326c\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '458',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"c1bb3595-a035-4c1f-980a-ae24646fb896"',
  'x-ms-request-id': '22aa78a6-b226-4925-9da2-21eaad97f8d9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '39899d4f-5c17-4c27-9666-191580654d9f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T101024Z:39899d4f-5c17-4c27-9666-191580654d9f',
  date: 'Mon, 07 Aug 2017 10:10:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/83230855-d890-4711-9f07-043c5281b5c4?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '83230855-d890-4711-9f07-043c5281b5c4',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/83230855-d890-4711-9f07-043c5281b5c4?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '4afbd7da-5025-4450-948c-a55f2d0edc61',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T101026Z:4afbd7da-5025-4450-948c-a55f2d0edc61',
  date: 'Mon, 07 Aug 2017 10:10:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operationResults/83230855-d890-4711-9f07-043c5281b5c4?api-version=2017-06-01',
  'retry-after': '10',
  'x-ms-request-id': '83230855-d890-4711-9f07-043c5281b5c4',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/83230855-d890-4711-9f07-043c5281b5c4?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '4afbd7da-5025-4450-948c-a55f2d0edc61',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T101026Z:4afbd7da-5025-4450-948c-a55f2d0edc61',
  date: 'Mon, 07 Aug 2017 10:10:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/83230855-d890-4711-9f07-043c5281b5c4?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f664b257-3268-484e-bd41-76da50c556d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'a9e64e29-4466-4403-b219-55212a305439',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T101057Z:a9e64e29-4466-4403-b219-55212a305439',
  date: 'Mon, 07 Aug 2017 10:10:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/83230855-d890-4711-9f07-043c5281b5c4?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f664b257-3268-484e-bd41-76da50c556d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'a9e64e29-4466-4403-b219-55212a305439',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T101057Z:a9e64e29-4466-4403-b219-55212a305439',
  date: 'Mon, 07 Aug 2017 10:10:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/routeTableName' under resource group 'xplat-test-route-table' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '52d7473f-2ee2-4a66-b4b7-709fcac212c6',
  'x-ms-correlation-request-id': '52d7473f-2ee2-4a66-b4b7-709fcac212c6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T101059Z:52d7473f-2ee2-4a66-b4b7-709fcac212c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 07 Aug 2017 10:10:59 GMT',
  connection: 'close',
  'content-length': '170' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-route-table/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/routeTables/routeTableName' under resource group 'xplat-test-route-table' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '52d7473f-2ee2-4a66-b4b7-709fcac212c6',
  'x-ms-correlation-request-id': '52d7473f-2ee2-4a66-b4b7-709fcac212c6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T101059Z:52d7473f-2ee2-4a66-b4b7-709fcac212c6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 07 Aug 2017 10:10:59 GMT',
  connection: 'close',
  'content-length': '170' });
 return result; }]];
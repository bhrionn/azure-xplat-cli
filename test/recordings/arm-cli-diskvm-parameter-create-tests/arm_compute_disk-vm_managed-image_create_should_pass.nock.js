// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate8904/providers/Microsoft.Compute/images/xplattestimg8A?api-version=2017-03-30', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"osState\": \"Generalized\",\r\n        \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 1,\r\n          \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n          \"caching\": \"None\"\r\n        }\r\n      ]\r\n    },\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/images\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate8904/providers/Microsoft.Compute/images/xplattestimg8A\",\r\n  \"name\": \"xplattestimg8A\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '774',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0f831c2a-cf2e-4588-9957-4c6399262472?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '0f831c2a-cf2e-4588-9957-4c6399262472',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '3a24f98e-4365-49db-becd-b4adfe268035',
  'x-ms-routing-request-id': 'WESTUS2:20170530T051449Z:3a24f98e-4365-49db-becd-b4adfe268035',
  date: 'Tue, 30 May 2017 05:14:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate8904/providers/Microsoft.Compute/images/xplattestimg8A?api-version=2017-03-30', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"osState\": \"Generalized\",\r\n        \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 1,\r\n          \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n          \"caching\": \"None\"\r\n        }\r\n      ]\r\n    },\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/images\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate8904/providers/Microsoft.Compute/images/xplattestimg8A\",\r\n  \"name\": \"xplattestimg8A\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '774',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0f831c2a-cf2e-4588-9957-4c6399262472?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '0f831c2a-cf2e-4588-9957-4c6399262472',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '3a24f98e-4365-49db-becd-b4adfe268035',
  'x-ms-routing-request-id': 'WESTUS2:20170530T051449Z:3a24f98e-4365-49db-becd-b4adfe268035',
  date: 'Tue, 30 May 2017 05:14:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0f831c2a-cf2e-4588-9957-4c6399262472?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-05-30T05:14:50.6719566+00:00\",\r\n  \"endTime\": \"2017-05-30T05:14:55.9224183+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"0f831c2a-cf2e-4588-9957-4c6399262472\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '62237f99-fa4d-4bf8-bd73-0a52a16f6c0d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '1fdf4661-6d73-4052-9ff6-de3be6267b3a',
  'x-ms-routing-request-id': 'WESTUS:20170530T051520Z:1fdf4661-6d73-4052-9ff6-de3be6267b3a',
  date: 'Tue, 30 May 2017 05:15:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/0f831c2a-cf2e-4588-9957-4c6399262472?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-05-30T05:14:50.6719566+00:00\",\r\n  \"endTime\": \"2017-05-30T05:14:55.9224183+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"0f831c2a-cf2e-4588-9957-4c6399262472\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': '62237f99-fa4d-4bf8-bd73-0a52a16f6c0d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '1fdf4661-6d73-4052-9ff6-de3be6267b3a',
  'x-ms-routing-request-id': 'WESTUS:20170530T051520Z:1fdf4661-6d73-4052-9ff6-de3be6267b3a',
  date: 'Tue, 30 May 2017 05:15:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate8904/providers/Microsoft.Compute/images/xplattestimg8A?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"osState\": \"Generalized\",\r\n        \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 1,\r\n          \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n          \"caching\": \"None\"\r\n        }\r\n      ]\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/images\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate8904/providers/Microsoft.Compute/images/xplattestimg8A\",\r\n  \"name\": \"xplattestimg8A\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '775',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'ff598ea5-4654-479d-b5fb-18eed0fa22d5',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'b8d5e603-310b-4a07-a579-90c7999c45e4',
  'x-ms-routing-request-id': 'WESTUS:20170530T051521Z:b8d5e603-310b-4a07-a579-90c7999c45e4',
  date: 'Tue, 30 May 2017 05:15:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate8904/providers/Microsoft.Compute/images/xplattestimg8A?api-version=2017-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"storageProfile\": {\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"osState\": \"Generalized\",\r\n        \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n        \"caching\": \"None\"\r\n      },\r\n      \"dataDisks\": [\r\n        {\r\n          \"lun\": 1,\r\n          \"blobUri\": \"https://xplatteststorage17459.blob.core.windows.net/vm15163/xplattestvhd.vhd\",\r\n          \"caching\": \"None\"\r\n        }\r\n      ]\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/images\",\r\n  \"location\": \"southeastasia\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTstPvmGCreate8904/providers/Microsoft.Compute/images/xplattestimg8A\",\r\n  \"name\": \"xplattestimg8A\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '775',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131340057859683594',
  'x-ms-request-id': 'ff598ea5-4654-479d-b5fb-18eed0fa22d5',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': 'b8d5e603-310b-4a07-a579-90c7999c45e4',
  'x-ms-routing-request-id': 'WESTUS:20170530T051521Z:b8d5e603-310b-4a07-a579-90c7999c45e4',
  date: 'Tue, 30 May 2017 05:15:20 GMT',
  connection: 'close' });
 return result; }]];
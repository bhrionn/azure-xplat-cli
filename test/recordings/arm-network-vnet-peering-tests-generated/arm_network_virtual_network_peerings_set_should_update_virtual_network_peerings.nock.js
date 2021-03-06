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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkPeeringName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName\",\r\n  \"etag\": \"W/\\\"9820b5e1-6c7c-4eb6-be90-31df5b34c50e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringState\": \"Initiated\",\r\n    \"remoteVirtualNetwork\": {\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n    },\r\n    \"allowVirtualNetworkAccess\": true,\r\n    \"allowForwardedTraffic\": true,\r\n    \"allowGatewayTransit\": true,\r\n    \"useRemoteGateways\": false,\r\n    \"remoteAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"11.0.0.0/8\"\r\n      ]\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '848',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9820b5e1-6c7c-4eb6-be90-31df5b34c50e"',
  'x-ms-request-id': 'b8c01060-b32f-44ff-9f5a-292e00d2cf8a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '9ca8a89e-3cb1-4f3f-b71f-dbfb067baac7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T111422Z:9ca8a89e-3cb1-4f3f-b71f-dbfb067baac7',
  date: 'Mon, 07 Aug 2017 11:14:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkPeeringName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName\",\r\n  \"etag\": \"W/\\\"9820b5e1-6c7c-4eb6-be90-31df5b34c50e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringState\": \"Initiated\",\r\n    \"remoteVirtualNetwork\": {\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n    },\r\n    \"allowVirtualNetworkAccess\": true,\r\n    \"allowForwardedTraffic\": true,\r\n    \"allowGatewayTransit\": true,\r\n    \"useRemoteGateways\": false,\r\n    \"remoteAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"11.0.0.0/8\"\r\n      ]\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '848',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"9820b5e1-6c7c-4eb6-be90-31df5b34c50e"',
  'x-ms-request-id': 'b8c01060-b32f-44ff-9f5a-292e00d2cf8a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '9ca8a89e-3cb1-4f3f-b71f-dbfb067baac7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T111422Z:9ca8a89e-3cb1-4f3f-b71f-dbfb067baac7',
  date: 'Mon, 07 Aug 2017 11:14:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkPeeringName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName\",\r\n  \"etag\": \"W/\\\"5b67bd29-029f-46b3-8bbc-44f28a13a989\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"peeringState\": \"Initiated\",\r\n    \"remoteVirtualNetwork\": {\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n    },\r\n    \"allowVirtualNetworkAccess\": false,\r\n    \"allowForwardedTraffic\": false,\r\n    \"allowGatewayTransit\": false,\r\n    \"useRemoteGateways\": false,\r\n    \"remoteAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"11.0.0.0/8\"\r\n      ]\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '850',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '77fb8515-5bd3-4ea8-9247-e35ba2cf87c9',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/77fb8515-5bd3-4ea8-9247-e35ba2cf87c9?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '18db891d-f7c7-4181-b64f-3b0323cf0449',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T111424Z:18db891d-f7c7-4181-b64f-3b0323cf0449',
  date: 'Mon, 07 Aug 2017 11:14:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkPeeringName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName\",\r\n  \"etag\": \"W/\\\"5b67bd29-029f-46b3-8bbc-44f28a13a989\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"peeringState\": \"Initiated\",\r\n    \"remoteVirtualNetwork\": {\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n    },\r\n    \"allowVirtualNetworkAccess\": false,\r\n    \"allowForwardedTraffic\": false,\r\n    \"allowGatewayTransit\": false,\r\n    \"useRemoteGateways\": false,\r\n    \"remoteAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"11.0.0.0/8\"\r\n      ]\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '850',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '77fb8515-5bd3-4ea8-9247-e35ba2cf87c9',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/77fb8515-5bd3-4ea8-9247-e35ba2cf87c9?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '18db891d-f7c7-4181-b64f-3b0323cf0449',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T111424Z:18db891d-f7c7-4181-b64f-3b0323cf0449',
  date: 'Mon, 07 Aug 2017 11:14:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/77fb8515-5bd3-4ea8-9247-e35ba2cf87c9?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c4354144-46ea-4a1a-959a-f859fb2ceb01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '008b1bc9-0439-4c88-bc79-0847085b9041',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T111455Z:008b1bc9-0439-4c88-bc79-0847085b9041',
  date: 'Mon, 07 Aug 2017 11:14:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westus.validation/operations/77fb8515-5bd3-4ea8-9247-e35ba2cf87c9?api-version=2017-06-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c4354144-46ea-4a1a-959a-f859fb2ceb01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '008b1bc9-0439-4c88-bc79-0847085b9041',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T111455Z:008b1bc9-0439-4c88-bc79-0847085b9041',
  date: 'Mon, 07 Aug 2017 11:14:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkPeeringName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName\",\r\n  \"etag\": \"W/\\\"fcb5c754-a949-461e-9320-c7ea01de1320\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringState\": \"Initiated\",\r\n    \"remoteVirtualNetwork\": {\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n    },\r\n    \"allowVirtualNetworkAccess\": false,\r\n    \"allowForwardedTraffic\": false,\r\n    \"allowGatewayTransit\": false,\r\n    \"useRemoteGateways\": false,\r\n    \"remoteAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"11.0.0.0/8\"\r\n      ]\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '851',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fcb5c754-a949-461e-9320-c7ea01de1320"',
  'x-ms-request-id': '91004951-9bd6-4cf7-a606-efb7951a9c96',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'e9c40e98-59c7-4486-b5b8-aebc73cf13d4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T111456Z:e9c40e98-59c7-4486-b5b8-aebc73cf13d4',
  date: 'Mon, 07 Aug 2017 11:14:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkPeeringName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName\",\r\n  \"etag\": \"W/\\\"fcb5c754-a949-461e-9320-c7ea01de1320\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringState\": \"Initiated\",\r\n    \"remoteVirtualNetwork\": {\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n    },\r\n    \"allowVirtualNetworkAccess\": false,\r\n    \"allowForwardedTraffic\": false,\r\n    \"allowGatewayTransit\": false,\r\n    \"useRemoteGateways\": false,\r\n    \"remoteAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"11.0.0.0/8\"\r\n      ]\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '851',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"fcb5c754-a949-461e-9320-c7ea01de1320"',
  'x-ms-request-id': '91004951-9bd6-4cf7-a606-efb7951a9c96',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': 'e9c40e98-59c7-4486-b5b8-aebc73cf13d4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T111456Z:e9c40e98-59c7-4486-b5b8-aebc73cf13d4',
  date: 'Mon, 07 Aug 2017 11:14:56 GMT',
  connection: 'close' });
 return result; }]];
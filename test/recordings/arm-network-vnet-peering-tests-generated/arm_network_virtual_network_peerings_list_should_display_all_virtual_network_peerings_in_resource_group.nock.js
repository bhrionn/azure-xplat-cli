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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings?api-version=2017-06-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"virtualNetworkPeeringName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName\",\r\n      \"etag\": \"W/\\\"fcb5c754-a949-461e-9320-c7ea01de1320\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"peeringState\": \"Initiated\",\r\n        \"remoteVirtualNetwork\": {\r\n          \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n        },\r\n        \"allowVirtualNetworkAccess\": false,\r\n        \"allowForwardedTraffic\": false,\r\n        \"allowGatewayTransit\": false,\r\n        \"useRemoteGateways\": false,\r\n        \"remoteAddressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"11.0.0.0/8\"\r\n          ]\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '960',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'dfc30f72-4fe4-48e1-8df6-c98cdc584a73',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'e80aba2c-9928-42a8-9f84-685e840e1bb8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T111457Z:e80aba2c-9928-42a8-9f84-685e840e1bb8',
  date: 'Mon, 07 Aug 2017 11:14:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings?api-version=2017-06-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"virtualNetworkPeeringName\",\r\n      \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringName\",\r\n      \"etag\": \"W/\\\"fcb5c754-a949-461e-9320-c7ea01de1320\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"peeringState\": \"Initiated\",\r\n        \"remoteVirtualNetwork\": {\r\n          \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-peering/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n        },\r\n        \"allowVirtualNetworkAccess\": false,\r\n        \"allowForwardedTraffic\": false,\r\n        \"allowGatewayTransit\": false,\r\n        \"useRemoteGateways\": false,\r\n        \"remoteAddressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"11.0.0.0/8\"\r\n          ]\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '960',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'dfc30f72-4fe4-48e1-8df6-c98cdc584a73',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'e80aba2c-9928-42a8-9f84-685e840e1bb8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T111457Z:e80aba2c-9928-42a8-9f84-685e840e1bb8',
  date: 'Mon, 07 Aug 2017 11:14:57 GMT',
  connection: 'close' });
 return result; }]];
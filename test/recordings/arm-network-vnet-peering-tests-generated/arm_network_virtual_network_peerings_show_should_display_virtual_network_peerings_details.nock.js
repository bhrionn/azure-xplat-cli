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
  'x-ms-request-id': '13736397-4739-4357-a69e-a3fc8f7d1155',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '8eb633a1-a819-4145-bb31-0484103aa25b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T111420Z:8eb633a1-a819-4145-bb31-0484103aa25b',
  date: 'Mon, 07 Aug 2017 11:14:19 GMT',
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
  'x-ms-request-id': '13736397-4739-4357-a69e-a3fc8f7d1155',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '8eb633a1-a819-4145-bb31-0484103aa25b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T111420Z:8eb633a1-a819-4145-bb31-0484103aa25b',
  date: 'Mon, 07 Aug 2017 11:14:19 GMT',
  connection: 'close' });
 return result; }]];
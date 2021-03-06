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
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'brazilsouth';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePrivatePeering?api-version=2017-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePrivatePeering not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '294',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '10e83dfd-5849-47e0-a050-4b561c5fc27d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'e7c9a49f-5a78-4d8e-bda7-546e9c7d843b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T131526Z:e7c9a49f-5a78-4d8e-bda7-546e9c7d843b',
  date: 'Wed, 12 Jul 2017 13:15:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePrivatePeering?api-version=2017-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePrivatePeering not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '294',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '10e83dfd-5849-47e0-a050-4b561c5fc27d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'e7c9a49f-5a78-4d8e-bda7-546e9c7d843b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T131526Z:e7c9a49f-5a78-4d8e-bda7-546e9c7d843b',
  date: 'Wed, 12 Jul 2017 13:15:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePrivatePeering?api-version=2017-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"ParentResourceIsInFailedState\",\r\n    \"message\": \"PUT operation on child resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePrivatePeering is blocked because last operation (2a10ed99-1ecd-49f1-a68f-f3cb9656ef19) on parent resource failed leaving it in failed state. Run PUT operation on the parent, then retry operation on the child.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '522',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4e714e34-373b-42a2-9962-3106f3253f88',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '2a88787a-262f-4efd-9518-bab75b219060',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T131528Z:2a88787a-262f-4efd-9518-bab75b219060',
  date: 'Wed, 12 Jul 2017 13:15:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePrivatePeering?api-version=2017-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"ParentResourceIsInFailedState\",\r\n    \"message\": \"PUT operation on child resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-peering/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/peerings/AzurePrivatePeering is blocked because last operation (2a10ed99-1ecd-49f1-a68f-f3cb9656ef19) on parent resource failed leaving it in failed state. Run PUT operation on the parent, then retry operation on the child.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '522',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4e714e34-373b-42a2-9962-3106f3253f88',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '2a88787a-262f-4efd-9518-bab75b219060',
  'x-ms-routing-request-id': 'WESTEUROPE:20170712T131528Z:2a88787a-262f-4efd-9518-bab75b219060',
  date: 'Wed, 12 Jul 2017 13:15:28 GMT',
  connection: 'close' });
 return result; }]];
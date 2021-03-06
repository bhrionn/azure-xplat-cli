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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profileName\",\"name\":\"profileName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\",\"intervalInSeconds\":30,\"toleratedNumberOfFailures\":3,\"timeoutInSeconds\":10},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '646',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8a55b9ff-2732-411e-9b36-456cac78db8f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '839eb5b9-bc51-47cf-b9eb-5c31e1bbeaab',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133730Z:839eb5b9-bc51-47cf-b9eb-5c31e1bbeaab',
  date: 'Mon, 17 Jul 2017 13:37:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profileName\",\"name\":\"profileName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\",\"intervalInSeconds\":30,\"toleratedNumberOfFailures\":3,\"timeoutInSeconds\":10},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '646',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8a55b9ff-2732-411e-9b36-456cac78db8f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '839eb5b9-bc51-47cf-b9eb-5c31e1bbeaab',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133730Z:839eb5b9-bc51-47cf-b9eb-5c31e1bbeaab',
  date: 'Mon, 17 Jul 2017 13:37:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profileName\",\"name\":\"profileName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":\"Disabled\",\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\",\"intervalInSeconds\":10,\"toleratedNumberOfFailures\":5,\"timeoutInSeconds\":5},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f8d02637-7e96-4fa8-a5cd-1ad767d3ab8e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '2e4c32c8-a077-4590-a272-ab919b37748b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133731Z:2e4c32c8-a077-4590-a272-ab919b37748b',
  date: 'Mon, 17 Jul 2017 13:37:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-profile/providers/Microsoft.Network/trafficmanagerprofiles/profileName?api-version=2017-05-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/profileName\",\"name\":\"profileName\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":\"Disabled\",\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\",\"intervalInSeconds\":10,\"toleratedNumberOfFailures\":5,\"timeoutInSeconds\":5},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '628',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f8d02637-7e96-4fa8-a5cd-1ad767d3ab8e',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '2e4c32c8-a077-4590-a272-ab919b37748b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170717T133731Z:2e4c32c8-a077-4590-a272-ab919b37748b',
  date: 'Mon, 17 Jul 2017 13:37:31 GMT',
  connection: 'close' });
 return result; }]];
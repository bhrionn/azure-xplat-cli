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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/prefixesOutOfRangeName?api-version=2017-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/prefixesOutOfRangeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '285',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aef21bb1-313f-474e-9f4d-0f2c7b8d0b91',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '967d71de-d98a-4c9b-b67b-00c4375f38d8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T110336Z:967d71de-d98a-4c9b-b67b-00c4375f38d8',
  date: 'Mon, 07 Aug 2017 11:03:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/prefixesOutOfRangeName?api-version=2017-06-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/prefixesOutOfRangeName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '285',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'aef21bb1-313f-474e-9f4d-0f2c7b8d0b91',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '967d71de-d98a-4c9b-b67b-00c4375f38d8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T110336Z:967d71de-d98a-4c9b-b67b-00c4375f38d8',
  date: 'Mon, 07 Aug 2017 11:03:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkSecurityGroupName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\",\r\n  \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"387e31db-8c07-4864-a72d-b9530930a711\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6200',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"56150495-c209-4684-ad89-fa9ee4017d87"',
  'x-ms-request-id': '47ac010a-8ff2-4c8c-b5a2-2c6203910dc4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '2c0ffe0e-d206-40f4-828d-68315fc03bb4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T110338Z:2c0ffe0e-d206-40f4-828d-68315fc03bb4',
  date: 'Mon, 07 Aug 2017 11:03:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkSecurityGroupName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\",\r\n  \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n  \"type\": \"Microsoft.Network/networkSecurityGroups\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"387e31db-8c07-4864-a72d-b9530930a711\",\r\n    \"securityRules\": [],\r\n    \"defaultSecurityRules\": [\r\n      {\r\n        \"name\": \"AllowVnetInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetInBound\",\r\n        \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowAzureLoadBalancerInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowAzureLoadBalancerInBound\",\r\n        \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow inbound traffic from azure load balancer\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"AzureLoadBalancer\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllInBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllInBound\",\r\n        \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all inbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Inbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowVnetOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowVnetOutBound\",\r\n        \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to all VMs in VNET\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"VirtualNetwork\",\r\n          \"destinationAddressPrefix\": \"VirtualNetwork\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65000,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"AllowInternetOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/AllowInternetOutBound\",\r\n        \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Allow outbound traffic from all VMs to Internet\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"Internet\",\r\n          \"access\": \"Allow\",\r\n          \"priority\": 65001,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      },\r\n      {\r\n        \"name\": \"DenyAllOutBound\",\r\n        \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/defaultSecurityRules/DenyAllOutBound\",\r\n        \"etag\": \"W/\\\"56150495-c209-4684-ad89-fa9ee4017d87\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"description\": \"Deny all outbound traffic\",\r\n          \"protocol\": \"*\",\r\n          \"sourcePortRange\": \"*\",\r\n          \"destinationPortRange\": \"*\",\r\n          \"sourceAddressPrefix\": \"*\",\r\n          \"destinationAddressPrefix\": \"*\",\r\n          \"access\": \"Deny\",\r\n          \"priority\": 65500,\r\n          \"direction\": \"Outbound\",\r\n          \"sourcePortRanges\": [],\r\n          \"destinationPortRanges\": [],\r\n          \"sourceAddressPrefixes\": [],\r\n          \"destinationAddressPrefixes\": []\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '6200',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"56150495-c209-4684-ad89-fa9ee4017d87"',
  'x-ms-request-id': '47ac010a-8ff2-4c8c-b5a2-2c6203910dc4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '2c0ffe0e-d206-40f4-828d-68315fc03bb4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T110338Z:2c0ffe0e-d206-40f4-828d-68315fc03bb4',
  date: 'Mon, 07 Aug 2017 11:03:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"ce533582-3c94-4b89-b8e5-a788ff8a9e88\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"cdf21dd3-300d-401b-b1dc-9f4b6262efd8\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '453',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ce533582-3c94-4b89-b8e5-a788ff8a9e88"',
  'x-ms-request-id': '0b9261fd-4d87-4008-bbde-ff82ec8d9007',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '402665f4-18bb-49a7-a9de-97d7cf43d764',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T110339Z:402665f4-18bb-49a7-a9de-97d7cf43d764',
  date: 'Mon, 07 Aug 2017 11:03:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"routeTableName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\",\r\n  \"etag\": \"W/\\\"ce533582-3c94-4b89-b8e5-a788ff8a9e88\\\"\",\r\n  \"type\": \"Microsoft.Network/routeTables\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"cdf21dd3-300d-401b-b1dc-9f4b6262efd8\",\r\n    \"routes\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '453',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"ce533582-3c94-4b89-b8e5-a788ff8a9e88"',
  'x-ms-request-id': '0b9261fd-4d87-4008-bbde-ff82ec8d9007',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '402665f4-18bb-49a7-a9de-97d7cf43d764',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T110339Z:402665f4-18bb-49a7-a9de-97d7cf43d764',
  date: 'Mon, 07 Aug 2017 11:03:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/prefixesOutOfRangeName?api-version=2017-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"NetcfgInvalidSubnet\",\r\n    \"message\": \"Subnet 'prefixesOutOfRangeName' is not valid in virtual network 'virtualNetworkName'.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5ceb5126-a2d2-4fe6-b993-f45952561491',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'e16f2b46-5b4f-459e-a628-1ca9fef340f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T110341Z:e16f2b46-5b4f-459e-a628-1ca9fef340f0',
  date: 'Mon, 07 Aug 2017 11:03:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/prefixesOutOfRangeName?api-version=2017-06-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"NetcfgInvalidSubnet\",\r\n    \"message\": \"Subnet 'prefixesOutOfRangeName' is not valid in virtual network 'virtualNetworkName'.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '183',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '5ceb5126-a2d2-4fe6-b993-f45952561491',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': 'e16f2b46-5b4f-459e-a628-1ca9fef340f0',
  'x-ms-routing-request-id': 'WESTEUROPE:20170807T110341Z:e16f2b46-5b4f-459e-a628-1ca9fef340f0',
  date: 'Mon, 07 Aug 2017 11:03:40 GMT',
  connection: 'close' });
 return result; }]];
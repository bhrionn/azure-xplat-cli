// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'fb2c25dc-6bab-45c4-8cc9-cece7c42a95a',
    name: 'antps14',
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg17626/providers/Microsoft.Web/sites/webappclitests3400?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg17626/providers/Microsoft.Web/sites/webappclitests3400\",\"name\":\"webappclitests3400\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests3400\",\"state\":\"Running\",\"hostNames\":[\"webappclitests3400.azurewebsites.net\"],\"webSpace\":\"testrg17626-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-059.api.azurewebsites.windows.net:454/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/webspaces/testrg17626-WestUSwebspace/sites/webappclitests3400\",\"repositorySiteName\":\"webappclitests3400\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests3400.azurewebsites.net\",\"webappclitests3400.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests3400.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests3400.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg17626/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests9934\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-31T02:52:53.917\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests3400\",\"trafficManagerHostNames\":null,\"sku\":\"Standard\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"23.99.7.165,23.99.4.206,23.99.7.131,23.99.3.236\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-059\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg17626\",\"defaultHostName\":\"webappclitests3400.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2455',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D20332C5379CD0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c2145671-4f0b-49a8-82df-3315ba585e33',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14907',
  'x-ms-correlation-request-id': '77d68dfa-3388-47fa-b5bd-7ca2d5a56924',
  'x-ms-routing-request-id': 'WESTUS2:20160831T025300Z:77d68dfa-3388-47fa-b5bd-7ca2d5a56924',
  date: 'Wed, 31 Aug 2016 02:53:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg17626/providers/Microsoft.Web/sites/webappclitests3400?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg17626/providers/Microsoft.Web/sites/webappclitests3400\",\"name\":\"webappclitests3400\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"name\":\"webappclitests3400\",\"state\":\"Running\",\"hostNames\":[\"webappclitests3400.azurewebsites.net\"],\"webSpace\":\"testrg17626-WestUSwebspace\",\"selfLink\":\"https://waws-prod-bay-059.api.azurewebsites.windows.net:454/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/webspaces/testrg17626-WestUSwebspace/sites/webappclitests3400\",\"repositorySiteName\":\"webappclitests3400\",\"owner\":null,\"usageState\":0,\"enabled\":true,\"adminEnabled\":true,\"enabledHostNames\":[\"webappclitests3400.azurewebsites.net\",\"webappclitests3400.scm.azurewebsites.net\"],\"siteProperties\":{\"metadata\":null,\"properties\":[],\"appSettings\":null},\"availabilityState\":0,\"sslCertificates\":null,\"csrs\":[],\"cers\":null,\"siteMode\":null,\"hostNameSslStates\":[{\"name\":\"webappclitests3400.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":0},{\"name\":\"webappclitests3400.scm.azurewebsites.net\",\"sslState\":0,\"ipBasedSslResult\":null,\"virtualIP\":null,\"thumbprint\":null,\"toUpdate\":null,\"toUpdateIpBasedSsl\":null,\"ipBasedSslState\":0,\"hostType\":1}],\"computeMode\":null,\"serverFarm\":null,\"serverFarmId\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg17626/providers/Microsoft.Web/serverfarms/arm-cli-webapp-tests9934\",\"reserved\":false,\"lastModifiedTimeUtc\":\"2016-08-31T02:52:53.917\",\"storageRecoveryDefaultState\":\"Running\",\"contentAvailabilityState\":0,\"runtimeAvailabilityState\":0,\"siteConfig\":null,\"deploymentId\":\"webappclitests3400\",\"trafficManagerHostNames\":null,\"sku\":\"Standard\",\"premiumAppDeployed\":null,\"scmSiteAlsoStopped\":false,\"targetSwapSlot\":null,\"hostingEnvironment\":null,\"hostingEnvironmentProfile\":null,\"microService\":\"WebSites\",\"gatewaySiteName\":null,\"clientAffinityEnabled\":true,\"clientCertEnabled\":false,\"hostNamesDisabled\":false,\"domainVerificationIdentifiers\":null,\"kind\":null,\"outboundIpAddresses\":\"23.99.7.165,23.99.4.206,23.99.7.131,23.99.3.236\",\"containerSize\":0,\"dailyMemoryTimeQuota\":0,\"suspendedTill\":null,\"maxNumberOfWorkers\":null,\"homeStamp\":\"waws-prod-bay-059\",\"cloningInfo\":null,\"hostingEnvironmentId\":null,\"tags\":null,\"resourceGroup\":\"testrg17626\",\"defaultHostName\":\"webappclitests3400.azurewebsites.net\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2455',
  'content-type': 'application/json',
  expires: '-1',
  etag: '"1D20332C5379CD0"',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c2145671-4f0b-49a8-82df-3315ba585e33',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14907',
  'x-ms-correlation-request-id': '77d68dfa-3388-47fa-b5bd-7ca2d5a56924',
  'x-ms-routing-request-id': 'WESTUS2:20160831T025300Z:77d68dfa-3388-47fa-b5bd-7ca2d5a56924',
  date: 'Wed, 31 Aug 2016 02:53:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg17626/providers/Microsoft.Web/sites/webappclitests3400/config/web?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg17626/providers/Microsoft.Web/sites/webappclitests3400\",\"name\":\"webappclitests3400\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"numberOfWorkers\":1,\"defaultDocuments\":[\"Default.htm\",\"Default.html\",\"Default.asp\",\"index.htm\",\"index.html\",\"iisstart.htm\",\"default.aspx\",\"index.php\",\"hostingstart.html\"],\"netFrameworkVersion\":\"v4.0\",\"phpVersion\":\"7.0\",\"pythonVersion\":\"\",\"nodeVersion\":\"\",\"requestTracingEnabled\":false,\"remoteDebuggingEnabled\":false,\"remoteDebuggingVersion\":null,\"httpLoggingEnabled\":false,\"logsDirectorySizeLimit\":35,\"detailedErrorLoggingEnabled\":false,\"publishingUsername\":\"$webappclitests3400\",\"publishingPassword\":null,\"appSettings\":null,\"metadata\":null,\"connectionStrings\":null,\"machineKey\":null,\"handlerMappings\":null,\"documentRoot\":null,\"scmType\":\"None\",\"use32BitWorkerProcess\":true,\"webSocketsEnabled\":false,\"alwaysOn\":false,\"javaVersion\":null,\"javaContainer\":null,\"javaContainerVersion\":null,\"appCommandLine\":\"\",\"managedPipelineMode\":0,\"virtualApplications\":[{\"virtualPath\":\"/\",\"physicalPath\":\"site\\\\wwwroot\",\"preloadEnabled\":false,\"virtualDirectories\":null}],\"winAuthAdminState\":0,\"winAuthTenantState\":0,\"customAppPoolIdentityAdminState\":false,\"customAppPoolIdentityTenantState\":false,\"runtimeADUser\":null,\"runtimeADUserPassword\":null,\"loadBalancing\":1,\"routingRules\":[],\"experiments\":{\"rampUpRules\":[]},\"limits\":null,\"autoHealEnabled\":false,\"autoHealRules\":{\"triggers\":null,\"actions\":null},\"tracingOptions\":null,\"vnetName\":\"\",\"siteAuthEnabled\":false,\"siteAuthSettings\":{\"enabled\":null,\"httpApiPrefixPath\":null,\"unauthenticatedClientAction\":null,\"tokenStoreEnabled\":null,\"allowedExternalRedirectUrls\":null,\"defaultProvider\":null,\"clientId\":null,\"clientSecret\":null,\"issuer\":null,\"allowedAudiences\":null,\"additionalLoginParams\":null,\"isAadAutoProvisioned\":false,\"googleClientId\":null,\"googleClientSecret\":null,\"googleOAuthScopes\":null,\"facebookAppId\":null,\"facebookAppSecret\":null,\"facebookOAuthScopes\":null,\"twitterConsumerKey\":null,\"twitterConsumerSecret\":null,\"microsoftAccountClientId\":null,\"microsoftAccountClientSecret\":null,\"microsoftAccountOAuthScopes\":null},\"cors\":null,\"push\":null,\"apiDefinition\":null,\"autoSwapSlotName\":null,\"localMySqlEnabled\":false,\"ipSecurityRestrictions\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2325',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e7d262b1-0b2e-46a8-a8c4-fccf3aa5ba09',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '46d664dd-7b7e-4a48-820a-737b30d9a359',
  'x-ms-routing-request-id': 'WESTUS2:20160831T025301Z:46d664dd-7b7e-4a48-820a-737b30d9a359',
  date: 'Wed, 31 Aug 2016 02:53:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg17626/providers/Microsoft.Web/sites/webappclitests3400/config/web?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg17626/providers/Microsoft.Web/sites/webappclitests3400\",\"name\":\"webappclitests3400\",\"type\":\"Microsoft.Web/sites\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"numberOfWorkers\":1,\"defaultDocuments\":[\"Default.htm\",\"Default.html\",\"Default.asp\",\"index.htm\",\"index.html\",\"iisstart.htm\",\"default.aspx\",\"index.php\",\"hostingstart.html\"],\"netFrameworkVersion\":\"v4.0\",\"phpVersion\":\"7.0\",\"pythonVersion\":\"\",\"nodeVersion\":\"\",\"requestTracingEnabled\":false,\"remoteDebuggingEnabled\":false,\"remoteDebuggingVersion\":null,\"httpLoggingEnabled\":false,\"logsDirectorySizeLimit\":35,\"detailedErrorLoggingEnabled\":false,\"publishingUsername\":\"$webappclitests3400\",\"publishingPassword\":null,\"appSettings\":null,\"metadata\":null,\"connectionStrings\":null,\"machineKey\":null,\"handlerMappings\":null,\"documentRoot\":null,\"scmType\":\"None\",\"use32BitWorkerProcess\":true,\"webSocketsEnabled\":false,\"alwaysOn\":false,\"javaVersion\":null,\"javaContainer\":null,\"javaContainerVersion\":null,\"appCommandLine\":\"\",\"managedPipelineMode\":0,\"virtualApplications\":[{\"virtualPath\":\"/\",\"physicalPath\":\"site\\\\wwwroot\",\"preloadEnabled\":false,\"virtualDirectories\":null}],\"winAuthAdminState\":0,\"winAuthTenantState\":0,\"customAppPoolIdentityAdminState\":false,\"customAppPoolIdentityTenantState\":false,\"runtimeADUser\":null,\"runtimeADUserPassword\":null,\"loadBalancing\":1,\"routingRules\":[],\"experiments\":{\"rampUpRules\":[]},\"limits\":null,\"autoHealEnabled\":false,\"autoHealRules\":{\"triggers\":null,\"actions\":null},\"tracingOptions\":null,\"vnetName\":\"\",\"siteAuthEnabled\":false,\"siteAuthSettings\":{\"enabled\":null,\"httpApiPrefixPath\":null,\"unauthenticatedClientAction\":null,\"tokenStoreEnabled\":null,\"allowedExternalRedirectUrls\":null,\"defaultProvider\":null,\"clientId\":null,\"clientSecret\":null,\"issuer\":null,\"allowedAudiences\":null,\"additionalLoginParams\":null,\"isAadAutoProvisioned\":false,\"googleClientId\":null,\"googleClientSecret\":null,\"googleOAuthScopes\":null,\"facebookAppId\":null,\"facebookAppSecret\":null,\"facebookOAuthScopes\":null,\"twitterConsumerKey\":null,\"twitterConsumerSecret\":null,\"microsoftAccountClientId\":null,\"microsoftAccountClientSecret\":null,\"microsoftAccountOAuthScopes\":null},\"cors\":null,\"push\":null,\"apiDefinition\":null,\"autoSwapSlotName\":null,\"localMySqlEnabled\":false,\"ipSecurityRestrictions\":null}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2325',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'e7d262b1-0b2e-46a8-a8c4-fccf3aa5ba09',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '46d664dd-7b7e-4a48-820a-737b30d9a359',
  'x-ms-routing-request-id': 'WESTUS2:20160831T025301Z:46d664dd-7b7e-4a48-820a-737b30d9a359',
  date: 'Wed, 31 Aug 2016 02:53:01 GMT',
  connection: 'close' });
 return result; }]];
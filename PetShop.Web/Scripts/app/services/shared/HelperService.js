app.factory('HelperService', ['$http', '$resource', function ($http, $resource) {
    var baseUrl = config.apiurl;
    var buildUrl = function (resourceUrl) {
        return baseUrl + resourceUrl;
    };

    var addRequestHeader = function (key, value) {

    };
    return {
        AuthorizationToken: $resource(buildUrl("Token"), null,
        {
            requestToken: { method: 'POST', headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        }),
        Account: $resource(buildUrl('api/Account/'), null,
            {
                register: { method: 'post' },
                logOff: { method: 'put' }
            })
    };
}]);
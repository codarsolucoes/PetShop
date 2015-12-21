window.app = angular.module('PetShopManagerApp', ['ngRoute', 'ngResource', 'ngAnimate']);
app.config(['$routeProvider', '$locationProvider', '$httpProvider', '$provide', function ($routeProvider, $locationProvider, $httpProvider, $provide) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.useXDomain = true;
    $locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
    $routeProvider
        .when('/Login', { templateUrl: '/Scripts/app/views/shared/Login.html' })
        .when('/Register', { templateUrl: '/Scripts/app/views/shared/Register.html' })
        .when('/Home', { templateUrl: '/Scripts/app/views/home/Home.html', controller: 'HomeCtrl' })
        .when('/Error', { templateUrl: '/Scripts/app/views/shared/Error.html' })
        .otherwise({
            redirectTo: '/Login'
        });

    $httpProvider.interceptors.push('authorizationInterceptor');
    //$httpProvider.interceptors.push('httpInterceptor');
}])
//.factory("userProfileService", function () {
  //  return {};
//});

window.utilities = angular.module("custom-utilities", []);
var Hrentals = angular.module('Hrentals', 
  ['ngRoute', 'firebase']);

Hrentals.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    when('/success', {
      templateUrl: 'views/success.html',
      controller: 'SuccessController',
    }).
    when('/home', {
      templateUrl: 'index.html',
      
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);
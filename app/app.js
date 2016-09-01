'use strict';

// Declare app level module which depends on views, and components
var module = angular.module('movieCat', [
	'ngRoute',
	'movieCat.in_theaters',
	'movieCat.top250',
	'movieCat.coming_soon'
]);

module.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]);

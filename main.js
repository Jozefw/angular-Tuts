var myApp = angular.module("vocabulary", ["ngRoute"]);

myApp.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "home.html"
	})
	.when("/tranlate", {
		templateUrl: "translate.html"
	})
	.when("/learn", {
		templateUrl: "learn.html"
	})
	.otherwise({
		redirectTo: "/"
	});
});
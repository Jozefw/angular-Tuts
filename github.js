
// register a factory on the module (same module as before) called github and run the function githuby
	var module = angular.module("githHubView");
	module.factory('gitHub',['$http', function($http){

	var githHuby =function($http){

		var getUser =function(username){
			return $http.get("https://api.github.com/users/" + username)
			.then(function(response){
				return response.data;
			});
		};

		var onRepository = function(user){
			return $http.get(user.repos_url)
				.then(function(response){
					return response.data;
				});
		};

		return{
			getUser: getUser,
			getRepo: onrepository,
		};
	};


}]);




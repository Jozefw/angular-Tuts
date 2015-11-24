var testApp = angular.module('testies', []);

testApp.controller('testController', ['$scope', function($scope){
  $scope.test1="void";
  $scope.test2=null;
  $scope.thing="Helllooe";
}]);

testApp.controller('translator', ['$scope', function($scope){
	$scope.cards =[
		{id: 1, source: "One", target: "Uno", languageId: 1},
		{id: 1, source: "Two", target: "Dos", languageId: 1},
		{id: 1, source: "Three", target: "Tres", languageId: 1},
		{id: 1, source: "Four", target: "Quatro", languageId: 1},

	];
	console.log($scope.cards);
}]);

testApp.controller('QuestionaireController', ['$scope',function($scope){
	$scope.questions = [
		{number: "1", type: "number", question: "Kids?"},
		{number: "2", type: "date", question: "birth"},
		{number: "3", type: "text", question: "country"},
		{number: "4", type: "singleOption", question: "Hobby?",
			options: [
				{name: "king fu"},
				{name: "yoga"},
				{name: "sex you"},
				{name: "melting stuff"},

			]

		},


	];

}]);





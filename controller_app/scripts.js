var myApp= angular.module("myApp",['ngRoute']);


myApp.controller('MainController',function($scope,$rootScope){
	$scope.message="hello welcome";
	var person={
		firstname : "senthamil",
		lastname :"durairaj",
		image :"miy.jpg"
	}
	$scope.person=person;
})


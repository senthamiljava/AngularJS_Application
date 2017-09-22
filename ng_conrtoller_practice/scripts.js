var app=angular.module("myApp",[]);
app.controller("myController",function($scope)
{
	$scope.name1="Senthamil ";
	$scope.name2="Durairaj ";
   $scope.fullName=function()
   {
   	return $scope.name1+" "+$scope.name2;
   }
});


app.controller("list",function($scope)
{
	$scope.person=[
	{
		firstName:"senthamil",
		lastName:"durairaj",
		city:"vaduvur"
	},
	{
		firstName:"ezhil",
		lastName:"selvaraj",
		city:"vaduvur"
	},
	{
		firstName:"amala",
		lastName:"deepa",
		city:"chennai"
	}]
})
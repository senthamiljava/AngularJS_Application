var app=angular.module("myApp",[]);
app.controller("myController",function($scope){
 $scope.name=["senthamil","ezhil","anbu","prathish","sathana"];
});

app.controller("personController",function($scope)
{
 $scope.person=[
 {
 	name:"senthamil",
 	city:"vaduvur"
 },
 {
 	name:"ezhil",
 	city:"vaduvur"
 },
 {
 	name:"anbu",
 	city:"chennai"
 }];


});
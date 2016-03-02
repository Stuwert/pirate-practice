var app = angular.module('pirates', ['ngRoute']);

app.controller('PiratesController', ['$scope', function($scope){
  $scope.test = 1 + 3;
}])

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/views/pirates.html',
    })
})

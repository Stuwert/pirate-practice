var app = angular.module('pirates', []);

app.controller('PiratesController', ['$scope', function($scope){
  $scope.test = 1 + 3;
}])

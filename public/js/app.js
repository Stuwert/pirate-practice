var app = angular.module('pirates', ['ngRoute']);



app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/views/pirates.html',
    })
    .when('/pirates/create', {
      templateUrl: '/views/createform.html',
    })
})

app.controller('PiratesController', ['$scope', 'managePirates', function($scope, managePirates){

  $scope.newPirate;

  managePirates.getPirates().then(function(pirates){
    $scope.allPirates = pirates.data;
    console.log($scope.allPirates);
  })

  $scope.createPirate = function(){
    console.log($scope.newPirate);
    managePirates.createPirate($scope.newPirate)
  }

}])

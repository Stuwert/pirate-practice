app.service('managePirates', ['$http', function($http){
  this.getPirates = function(){
    return $http.get('/api/pirates')
  }

  this.createPirate = function(data){
    return $http.post('/api/pirates/new', data).then(function(response){
      console.log(response);
      return response
    })
  }

}])

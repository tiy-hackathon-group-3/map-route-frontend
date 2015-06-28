;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Dashboard', ['$scope', 'UserService', '$http', 'HEROKU',


    function ($scope, UserService, $http, HEROKU ){

    UserService.tokenizeHeader();

  	//Creating function and Method for retrieving and pushing routes to dash

  // console.log($http.get('https://nameless-forest-6621.herokuapp.com/trips', HEROKU.CONFIG));


  	$http.get('https://nameless-forest-6621.herokuapp.com/trips', HEROKU.CONFIG)
  		.success( function(data){
  			console.log(data);
  			$scope.trips = data;
  		})
  		.error( function(err){
  			console.error(err);
  		});

  	//Display Username on dashboard
    	$scope.user = Cookies.get('username');

      //Delete a trip

      // this.deleteTrip = function(whichTrip){
      //   var deleted = 'https://nameless-forest-6621.herokuapp.com/trips' + whichTrip.id;
      //   return $http.delete(deleted, 'https://nameless-forest-6621.herokuapp.com/trips')
      // };

      // $scope.deleteTheTrip = function (whichTrip){
      //   UserService.deleteTrip.(whichTrip).success( function (){
      //     $scope.
      //   });
      // };

    }

  ]);

}());

;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Dashboard', ['$scope', '$http', 'HEROKU', function ($scope, $http, HEROKU){

  	//Display Username on dashboard

  	$scope.user = Cookies.get('username');



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




    }

  ]);

}());

;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Dashboard', ['$scope', '$http', function ($scope, $http){

  	//Display Username on dashboard

  	$scope.user = Cookies.get('username');

  	//Creating function and Method for retrieving and pushing routes to dash

  console.log($http.get('https://nameless-forest-6621.herokuapp.com/trips/:trip-id/locations'));








    }

  ]);

}());

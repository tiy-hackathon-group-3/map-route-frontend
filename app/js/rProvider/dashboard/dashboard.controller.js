;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Dashboard', ['$scope', function ($scope){

  	//Display Username on dashboard

  	$scope.user = Cookies.get('username');






    }

  ]);

}());

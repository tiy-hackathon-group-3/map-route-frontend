;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Dashboard', ['$scope', 'UserService',

    function ($scope, UserService){

  	//Display Username on dashboard

      UserService.tokenizeHeader();

    	$scope.user = Cookies.get('username');

    }

  ]);

}());

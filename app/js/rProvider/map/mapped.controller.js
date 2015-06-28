;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Mapped', ['$scope', 'UserService',
    function ($scope, UserService) {

      console.log('Hello from Map Controller');

      UserService.tokenizeHeader();


    }


  ]);

}());

;(function (){

  'use strict';

  angular.module('rProvider')

  .service('UserService', [ '$location',

    function ($location) {

      var userToken = function (token){
        Cookies.set('Access-Token', token.access_token);
        Cookies.set('username', token.username);

      };
      console.log(userToken);
    }

  ]);

}());

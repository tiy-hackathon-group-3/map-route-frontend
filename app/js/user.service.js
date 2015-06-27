;(function (){

  'use strict';

  angular.module('rProvider')

  .service('UserService', [ '$location',

    function ($location) {

      var userToken = function (){

    // Cookies.get('username');
    Cookies.get('Access-Token');

      //   Cookies.get('Access-Token', token.access_token);
      //   Cookies.get('username', token.username);

      };
      // console.log(userToken);
    }

  ]);

}());

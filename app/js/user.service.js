;(function (){

  'use strict';

  angular.module('rProvider')

  .service('UserService', [ '$location', 'HEROKU',

    function ($location, HEROKU) {

      this.tokenizeHeader = function (){
        console.log('s');

        var token = Cookies.get('Access-Token');

        if (token) {
          HEROKU.CONFIG.headers['Access-Token'] = token;
        } else {
        $location.path('/login');
        console.log('Hello from User Service');
        }

      };

    }

  ]);

}());

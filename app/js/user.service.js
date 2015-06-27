;(function (){

  'use strict';

  angular.module('rProvider')

  .service('UserService', [ '$location', 'HEROKU',

    function ($location, HEROKU) {

      var tokenizeHeader = function (){

        var token = Cookies.get('Access-Token');
        if (token) {
          HEROKU.CONFIG.headers['Access-Token'] = token;
        }

        $location.path('/login');
      };

    }

  ]);

}());

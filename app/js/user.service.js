;(function (){

  'use strict';

  angular.module('rProvider')

  .service('UserService', [ '$location', 'HEROKU', '$http', '$routeParams',
    function ($location, HEROKU, $http, $routeParams) {

      var endpoint = HEROKU.URL + 'trips/';

      this.tokenizeHeader = function (){

        var token = Cookies.get('Access-Token');

        if (token) {
          HEROKU.CONFIG.headers['Access-Token'] = token;
        } else {
        $location.path('/login');
        console.log('Hello from User Service');
        }

      };

      this.getId = function (id) {
        $http.get(endpoint + id + '/optimize', HEROKU.CONFIG);
      };

    }

  ]);

}());

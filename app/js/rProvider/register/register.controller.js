;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Register', ['$scope', '$http', 'HEROKU', '$location',

    function ($scope, $http, HEROKU, $location) {

      var Register = function (options){
        this.email = options.email;
        this.username = options.username;
        this.password = options.password;
      };

      $scope.registration = function (data) {
        $http.post(HEROKU.URL + 'users/register', data)
        .success( function (data){

          Cookies.set('Access-Token', data.access_token);
          Cookies.set('username', data.username);

          $location.path('/');
          console.log('promise complete');

          $scope.registration = {};

        });

      };

    }

  ]);

}());

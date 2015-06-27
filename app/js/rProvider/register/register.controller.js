;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Register', ['$scope', '$http',

    function ($scope, $http) {

      var Register = function (options){
        this.email = options.email;
        this.username = options.username;
        this.password = options.password;
      };

      $scope.registration =function (data) {
        $http.post(HEROKU.URL + 'users/register', data);
      };
    }

  ]);

}());

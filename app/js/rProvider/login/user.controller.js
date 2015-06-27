;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('User', ['$scope', '$http', 'HEROKU',

    function ($scope, $http, HEROKU){

      // var url = 'https://nameless-forest-6621.herokuapp.com/',
      // config = {header: ''};

      var User = function (options){
        this.username = options.username;
        this.passwoord = options.password;
      };

      //
      $scope.login = function (data) {
        $http.post(HEROKU.URL + 'users/login', data);
        // .success( function (data){
        //   console.log(data);
        };



    }

  ]);

}());

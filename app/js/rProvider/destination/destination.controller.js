;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Destination', ['$scope', '$http', 'HEROKU', 'UserService',

    function ($scope, $http, HEROKU, UserService) {

      UserService.tokenizeHeader();

      var Destination = function (options){
        this.street = options.street;
        this.city = options.city;
        this.state = options.state;
        this.zipcode = options.zipcode;
      };

      $scope.destination =function (data) {
        $http.post(HEROKU.URL + 'users/destination', data);
        // .success( function (){
          // run after promise
        // });

      };

    }

  ]);

}());

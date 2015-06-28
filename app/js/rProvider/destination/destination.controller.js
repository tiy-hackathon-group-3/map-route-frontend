;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Destination', ['$scope', '$http', 'HEROKU', 'UserService','$routeParams',

    function ($scope, $http, HEROKU, UserService, $routeParams) {

    var idfinder = (HEROKU.URL + 'trips/'+ $routeParams.trip_id +'/locations');

    UserService.tokenizeHeader();


      var Destination = function (options){
        this.street = options.street;
        this.city = options.city;
        this.state = options.state;
        this.zipcode = options.zipcode;
      };

      $scope.destination =function (data) {
        $http.post(idfinder, data, HEROKU.CONFIG)
        .success( function (){
          console.log('Posted Successfully')
          $scope.destination = {};
          e.log.reset();
        });

      };

    }

  ]);

}());

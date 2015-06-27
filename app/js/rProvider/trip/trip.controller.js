;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Trip', ['$scope', '$http', '$location', 'HEROKU',

    function ($scope, $http, $location, HEROKU) {

      // var Trip = function (options){
      //   this.title = options.title;

      // };

      $scope.tripTitle =function (t) {
        $http.post(HEROKU.URL + 'trips', t, HEROKU.CONFIG);
        // .success( function (){
          // $location.path('/trips/:trip_id/locations')
        // });

      };

    }

  ]);

}());

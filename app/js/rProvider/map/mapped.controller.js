;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Mapped', ['$scope',
    function ($scope) {

      console.log('Hello from Map Controller');

      $scope.map = {
        center: {
          latitude: 33.7622229802915,
          longitude: -84.33107501970849
        },

      zoom: 12,
      bounds: {}


    };

    }


  ]);

}());

;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Mapped', ['$scope' , 'UserService', '$http', 'HEROKU',
    function ($scope, UserService, $http, HEROKU) {


      UserService.tokenizeHeader();

      var lat = 33.7622229802915;
      var lng = -84.33107501970849;

      var map = L.map('map').setView([lat, lng], 13);


      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWljaGFlbG1hcmNpbmVrIiwiYSI6ImIyMjRmOTdlYzIzZTU0MmI4MWYwYmVhYTNmMWQ2NGNmIn0.Sd0s189TLjNqC1LjSAktFg', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'michaelmarcinek.mijfd45l',
        accessToken: 'your.mapbox.public.access.token'
      }).addTo(map);


      $http.get(HEROKU.URL + '/trips/15/locations', HEROKU.CONFIG)
        .success( function(data){
          $scope.list = data;
          data.forEach( function (results){
            var marker = L.marker([results.lat, results.lng]).addTo(map);
        });
         map.setView(new L.LatLng(data[0].lat, data[0].lng), 13);
      });





    }


  ]);

}());

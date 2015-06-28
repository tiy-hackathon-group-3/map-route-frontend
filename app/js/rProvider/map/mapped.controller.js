;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Mapped', ['$scope' , 'UserService', '$http', 'HEROKU',
    function ($scope, UserService, $http, HEROKU) {

      console.log('Hello from Map Controller');

      UserService.tokenizeHeader();

      var lat = 33.7622229802915;
      var lon = -84.33107501970849;

      var map = L.map('map').setView([lat, lon], 13);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWljaGFlbG1hcmNpbmVrIiwiYSI6ImIyMjRmOTdlYzIzZTU0MmI4MWYwYmVhYTNmMWQ2NGNmIn0.Sd0s189TLjNqC1LjSAktFg', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'michaelmarcinek.mijfd45l',
        accessToken: 'your.mapbox.public.access.token'
      }).addTo(map);

      var marker = L.marker([lat, lon]).addTo(map);

      var makeMarkers = function (data){
        // Remember to swap out optimize endpoint, but leave locations to test without stressing load:
        $http.get(HEROKU.URL + '/trips/15/locations', data, HEROKU.CONFIG)
        .console.log(data)
        .success( function (results){
          console.log(results);
        });

      };


    }


  ]);

}());

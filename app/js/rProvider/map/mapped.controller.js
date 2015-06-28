;(function (){

  'use strict';

  angular.module('rProvider')

  .controller('Mapped', ['$scope' , 'UserService', '$http', 'HEROKU',
    function ($scope, UserService, $http, HEROKU) {


      UserService.tokenizeHeader();

      // Sets default map lat and lng to a cool place in Atlanta

      // var lat = 33.7622229802915;
      // var lng = -84.33107501970849; .setView([lat, lng], 13)

      var map = L.map('map');

      // initializes Mapbox skin
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWljaGFlbG1hcmNpbmVrIiwiYSI6ImIyMjRmOTdlYzIzZTU0MmI4MWYwYmVhYTNmMWQ2NGNmIn0.Sd0s189TLjNqC1LjSAktFg', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'michaelmarcinek.mijfd45l',
        accessToken: 'your.mapbox.public.access.token'
      }).addTo(map);

      // Populates array of points to pass to Trip data to Leaflet-Route-Machine:

      var points = [];
      var waypoint = [];

      $http.get(HEROKU.URL + '/trips/16/locations', HEROKU.CONFIG)
        .success( function(data){
          $scope.list = data;
          data.forEach( function (results){
            var lat = results.lat;
            var lng = results.lng;

            L.marker([lat, lng]).addTo(map);

            points.push(L.latLng(lat, lng));

        });
          console.log(points);

        map.setView(new L.LatLng(data[0].lat, data[0].lng), 13);

        L.Routing.control({
          waypoints: points


        }).addTo(map);



      });











//



    }


  ]);

}());



// data.forEach( function (results, idx){
          // L.marker([results.lat, results.lng]).addTo(map);
         //  //
         //    //console.log(results.lat, results.lng);
         //    points.push();
         //    // L.latLng(results.lat, results.lng)
         //    // console.log(points);

         //  //   // var marker = L.marker([results.lat, results.lng]).addTo(map);
         //   });
         //  // // Sets view to center on start marker

        //


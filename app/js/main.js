;(function (){

  'use strict';

  angular.module('rProvider', ['ngRoute', 'uiGmapgoogle-maps'])

  .config(function ($routeProvider) {
    $routeProvider

    .when('/login', {
      templateUrl: 'js/rProvider/login.tpl.html',
      controller: 'User'
    })
    .otherwise('/login');

  });


}());

//save to inject into map view:

// <ui-gmap-google-map center='map.center' zoom='map.zoom'></ui-gmap-google-map>


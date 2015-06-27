;(function (){

  'use strict';

  angular.module('rProvider', ['ngRoute', 'uiGmapgoogle-maps'])

  .config(function ($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'js/rProvider/dashboard.tpl.html',
      controler: 'Home'
    })

    .when('/login', {
      templateUrl: 'js/rProvider/login.tpl.html',
      controller: 'User'
    })
    // .otherwise('/login');

    .when('/register', {
      templateUrl: 'js/rProvider/register.tpl.html',
      controller: 'Register'
    })

    .when('/addDest', {
      templateUrl: 'js/rProvider/destination.tpl.html',
      controller: 'Destination'
    })

    .when('/mapDest', {
      templateUrl: 'js/rPRovider/mapped.tpl.html',
      controler: 'Mapped'
    });

  });


}());

//save to inject into map view:

// <ui-gmap-google-map center='map.center' zoom='map.zoom'></ui-gmap-google-map>


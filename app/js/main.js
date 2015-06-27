;(function (){

  'use strict';

  angular.module('rProvider', ['ngRoute', 'uiGmapgoogle-maps'])

  .constant('HEROKU', {
    URL: 'https://nameless-forest-6621.herokuapp.com/',
    CONFIG: {
      headers: {
      'Access-Token' : ''
      }
    }

  })

  .config(function ($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'js/rProvider/dashboard/dashboard.tpl.html',
      controller: 'Dashboard'
    })

    .when('/login', {
      templateUrl: 'js/rProvider/login/login.tpl.html',
      controller: 'User'
    })
    // .otherwise('/login');

    .when('/register', {
      templateUrl: 'js/rProvider/register/register.tpl.html',
      controller: 'Register'
    })

    .when('/addDest', {
      templateUrl: 'js/rProvider/trip/trip.tpl.html',
      controller: 'Trip'
    })
    // .when('/addAddress', {
    //   templateUrl: '',
    //   controller: ''
    // })

    .when('/mapDest', {
      templateUrl: 'js/rProvider/map/mapped.tpl.html',
      controler: 'Mapped'
    });


  //   .when('/createTrip',{
  //      templateUrl: 'js/rProvider/trip/trip.controller.js',
  //      controller: 'createTrip'
  // });

  });


}());




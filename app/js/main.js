;(function (){

  'use strict';

  angular.module('rProvider', ['ngRoute', 'uiGmapgoogle-maps'])

  .constant('HEROKU', {
    URL: 'https://nameless-forest-6621.herokuapp.com/',
    CONFIG: {
      headers: {

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
      templateUrl: 'js/rProvider/destination/destination.tpl.html',
      controller: 'Destination'
    })

    .when('/mapDest', {
      templateUrl: 'js/rPRovider/map/mapped.tpl.html',
      controller: 'Mapped'
    });

  });


}());




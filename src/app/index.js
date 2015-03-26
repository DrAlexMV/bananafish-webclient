'use strict';

angular.module('bananafish', [
  'restangular',
  'ui.router',
  'ui.bootstrap',
  'bananafish.companies',
  'bananafish.games',
  'bananafish.jobs',
  'bananafish.about'
])
  .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
    $stateProvider
      .state('bf', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as main'
      });

    $urlRouterProvider.otherwise('/');

    // Restangular configuration
    RestangularProvider.setBaseUrl('http://localhost:5000/api/v1');
    //RestangularProvider.setDefaultHttpFields({ withCredentials: true });
  })
;

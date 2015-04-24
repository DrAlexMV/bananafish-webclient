/**
 *
 * Created by steven1046 on 4/23/15.
 */

'use strict';

angular.module('bananafish.home', []).config(function ($stateProvider) {

  var pathToTemplates = 'app/home/';

  $stateProvider
    .state('bf.home', { url: 'home/', abstract: true, template: '<ui-view></ui-view>' })
    .state('bf.home', {
      url: 'us',
      templateUrl: pathToTemplates + 'home.html',
      controller: 'HomeCtrl as home'
    });
});
/**
 * Created by ruben on 4/9/15.
 */

'use strict';

angular.module('bananafish.tests', []).config(function($stateProvider){

  var pathToTemplates = 'app/tests/';

  $stateProvider
  .state('bf.tests', { url: 'tests/', abstract: true, template: '<ui-view></ui-view>' })
    .state('bf.tests.search', {
      url: 'search',
      templateUrl: pathToTemplates + 'test-search.html',
      controller: 'TestsCtrl as testSearch'
    });
});

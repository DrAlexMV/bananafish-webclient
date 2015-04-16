/**
 * Created by ruben on 4/16/15.
 */

'use strict';

angular.module('bananafish.elementalists', []).config(function($stateProvider){

  var pathToTemplates = 'app/elementalists/';

  $stateProvider
    .state('bf.elementalists', { url: 'elementalists/', abstract: true, template: '<ui-view></ui-view>' })
    .state('bf.elementalists.search', {
      url: 'search',
      templateUrl: pathToTemplates + 'elementalists-search.html',
      controller: 'ElemSearchCtrl as ElemSearch'
    });
});

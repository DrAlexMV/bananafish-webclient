/**
 *
 * Created by alexanderventura on 3/26/15.
 */

angular.module('bananafish.about', []).config(function ($stateProvider) {

  var pathToTemplates = 'app/about/';

  $stateProvider
    .state('bf.about', { url: 'about/', abstract: true, template: '<ui-view></ui-view>' })
    .state('bf.about.us', {
      url: 'us',
      templateUrl: pathToTemplates + 'about-us.html',
      controller: 'AboutUsCtrl as aboutUs'
    });
});

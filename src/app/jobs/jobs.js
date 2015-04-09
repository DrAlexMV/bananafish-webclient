/**
 *
 * Created by Ruben Baeza on 3/25/15.
 */

'use strict';

angular.module('bananafish.jobs', []).config(function ($stateProvider) {

  var pathToTemplates = 'app/jobs/';

  $stateProvider
    .state('bf.jobs', { url: 'jobs/', abstract: true, template: '<ui-view></ui-view>' })
    .state('bf.jobs.search', {
      url: 'search',
      templateUrl: pathToTemplates + 'job-search.html',
      controller: 'JobSearchCtrl as jobsSearch'
    });
});

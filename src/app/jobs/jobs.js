/**
 * Created by alexanderventura on 3/25/15.
 */

'use strict';

angular.module('bananafish.jobs', []).config(function ($stateProvider) {
  $stateProvider
    .state('bf.jobs', { url: 'jobs/', abstract: true, template: '<ui-view></ui-view>' })
    .state('bf.jobs.search', {
      url: 'jobs',
      templateUrl: 'app/jobs/job-search.html',
      controller: 'JobSearchCtrl as jobsSearch'
    });
});

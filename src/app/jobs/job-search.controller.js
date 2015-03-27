/**
 * Created by alexanderventura on 3/25/15.
 */

'use strict';

angular.module('bananafish.jobs').controller('JobSearchCtrl', function (Jobs) {

  var vm = this;

  Jobs.getJobs().then(function (jobs) {
    vm.jobs = jobs;
  });
});

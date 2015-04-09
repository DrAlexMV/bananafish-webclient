/**
 * Created by alexanderventura on 3/25/15.
 */

'use strict';

angular.module('bananafish.jobs').controller('JobSearchCtrl', function ($scope, Job) {

  var vm = this;

  Jobs.all().then(function (jobs) {
    vm.jobs = jobs;
  });
});

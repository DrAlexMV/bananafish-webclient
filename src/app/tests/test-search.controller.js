/**
 * Created by ruben on 4/9/15.
 */

'use strict';

angular.module('bananafish.tests').controller('TestsCtrl', function(Test){

  var vm = this;

  Tests.get().then(function(tests){
    vm.tests = tests;
  });
})

/**
 * Created by ruben on 4/9/15.
 */

'use strict';

angular.module('bananafish.tests').controller('TestSearchCtrl', function($http){

  var vm = this;

  $http.get("http://23.253.89.46:5000/api/v1/tests/").success(function(response){
    vm.results = response;
    console.log(response.test_result);
  });
});

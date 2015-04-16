/**
 * Created by ruben on 4/16/15.
 */

'use strict';

angular.module('bananafish.elementalists').controller('ElemSearchCtrl', function($http){

  var vm = this;

  $http.get("http://private-anon-e9cc662cb-periodictable.apiary-mock.com/api/element").success(function(response){
    vm.results = response;
    console.log(response);
  }).error(function(response){
    console.log(response);
  });
});

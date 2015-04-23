/**
 * Created by ruben on 4/16/15.
 */

'use strict';

angular.module('bananafish.elementalists').controller('ElemSearchCtrl', function($http){

  var vm = this;

  $http.get("http://private-anon-02ed06f37-periodictable.apiary-mock.com/api/element").success(function(response){
    vm.results = response.data;
    console.log(response.data);
  }).error(function(response){
    console.log(response);
  });
});

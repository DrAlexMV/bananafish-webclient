/**
 * Created by ruben on 4/16/15.
 */

'use strict';

angular.module('bananafish.elementalists').controller('ElemSearchCtrl', function($http){

  var vm = this;

  $http.get("http://anyorigin.com/dev/get?url=http%3A//104.239.138.103/api/element&callback=?").success(function(response){
    vm.results = _.sortBy(response, 'density');
  }).error(function(response){
  });
});

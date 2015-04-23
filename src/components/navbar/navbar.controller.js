'use strict';

angular.module('bananafish')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.date = new Date();

    $scope.isActive = function(route){
      return route === $location.path();
    }
  });

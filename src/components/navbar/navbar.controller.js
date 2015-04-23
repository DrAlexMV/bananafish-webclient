'use strict';

angular.module('bananafish')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
    $scope.isActive = function (viewLocation){
      var active = (viewLocation === $location.path());
      return active;
    };
  });

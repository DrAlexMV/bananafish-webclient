/**
 *
 * Created by alexanderventura on 3/25/15.
 */

'use strict';

angular.module('bananafish.games').controller('GameSearchCtrl', function ($scope, Game) {

  var vm = this;

  Game.all().then(function (games) {
    vm.games = games;
  });
});

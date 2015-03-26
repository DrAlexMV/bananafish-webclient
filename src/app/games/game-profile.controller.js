/**
 *
 * Created by alexanderventura on 3/25/15.
 */

'use strict';

angular.module('bananafish.games').controller('GameProfileCtrl', function ($scope, game, $sce) {

  var vm = this;

  game.description = $sce.trustAsHtml(game.description);
  vm.game = game;

});

/**
 *
 * Created by alexanderventura on 3/25/15.
 */

'use strict';

angular.module('bananafish.games').factory('Game', function (Restangular, $log) {

  var baseGames = Restangular.all('games');

  return {
    all: function () {
      return baseGames.get('').then(function (games) {
        return games.games
      });
    }
  };
});


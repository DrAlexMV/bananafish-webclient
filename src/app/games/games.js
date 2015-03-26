/**
 *
 * Created by alexanderventura on 3/25/15.
 */

'use strict';

angular.module('bananafish.games', []).config(function ($stateProvider) {

  var pathToTemplates = 'app/games/';

  $stateProvider
    .state('bf.games', { url: 'games/', abstract: true, template: '<ui-view></ui-view>' })
    .state('bf.games.search', {
      url: 'search',
      templateUrl: pathToTemplates + 'game-search.html',
      controller: 'GameSearchCtrl as gameSearch'
    })
    .state('bf.games.profile', {
      url: 'profile/:id',
      templateUrl: pathToTemplates + 'game-profile.html',
      controller: 'GameProfileCtrl as gameProfile',
      resolve: {
        game: function (Game, $stateParams) {
          return Game.findById($stateParams.id).then(function (game) {
            return game
          });
        }
      }
    });
});

/**
 *
 * Created by alexanderventura on 3/25/15.
 */

'use strict';

angular.module('bananafish.games', []).config(function ($stateProvider) {
  $stateProvider
    .state('bf.games', { url: 'games/', abstract: true, template: '<ui-view></ui-view>' })
    .state('bf.games.search', {
      url: 'search',
      templateUrl: 'app/games/game-search.html',
      controller: 'GameSearchCtrl as gameSearch'
    });
});

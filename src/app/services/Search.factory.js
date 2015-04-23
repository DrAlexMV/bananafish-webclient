/**
 * Created by alexanderventura on 4/22/15.
 */

'use strict';

angular.module('bananafish.search').factory('Search', function (Restangular, $log, $q) {

	var mockData = {
		"results": [
			{
				"context": "...Shadow Realms...",
				"id": 47374,
				"name": "Shadow Realms",
				"type": "games"
			},
			{
				"context": "...rist group Shadow of Zakhaev...",
				"id": 35129,
				"name": "Call of Duty: Modern Warfare 3",
				"type": "games"
			},
			{
				"context": "...  Razor    Shadow Fiend    S...",
				"id": 32887,
				"name": "Dota 2",
				"type": "games"
			},
			{
				"context": "...Shepherd's Shadow Company fo...",
				"id": 24713,
				"name": "Modern Warfare 2",
				"type": "games"
			}
		]
	};

	var baseSearch = Restangular.all('search');

	return {
		searchWithQuery: function (query) {
			var deferred = $q.defer();

			deferred.resolve(mockData.results);

			return deferred.promise;
		}
	};
});

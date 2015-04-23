/**
 * Created by alexanderventura on 4/22/15.
 */

angular.module('bananafish.search', []).config(function ($stateProvider) {

	var pathToTemplates = 'app/search/';

	$stateProvider
		.state('bf.search', { url: 'search/', abstract: true, template: '<ui-view></ui-view>' })
		.state('bf.search.results', {
			url: 'search',
			templateUrl: pathToTemplates + 'search.html',
			controller: 'SearchCtrl as search'
		});
});

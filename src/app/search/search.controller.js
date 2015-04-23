/**
 * Created by alexanderventura on 4/22/15.
 */

angular.module('bananafish.search').controller('SearchCtrl', function (Search) {

	var vm = this;

	vm.lastQuery = '';
	vm.searchQuery = '';
	vm.errorMessage = '';
	vm.currentSearchResults = [];

	vm.searchWithQuery = function () {

		function searchSuccess(results) {
			vm.currentSearchResults = results;
			vm.lastQuery = _.clone(vm.searchQuery);
		}

		function searchFailure(err) {
			vm.errorMessage = err;
		}

		Search.searchWithQuery(vm.searchQuery).then(searchSuccess, searchFailure);
	};

});

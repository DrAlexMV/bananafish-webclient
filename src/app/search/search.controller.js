/**
 * Created by alexanderventura on 4/22/15.
 */

angular.module('bananafish.search').controller('SearchCtrl', function (Search, $state) {

	var vm = this;

	vm.lastQuery = '';
	vm.searchQuery = '';
	vm.errorMessage = '';
	vm.currentSearchResults = [];
	vm.waitingForResults = false;

	vm.searchWithQuery = function () {

		function searchSuccess(results) {
			vm.currentSearchResults = results;
			vm.lastQuery = _.clone(vm.searchQuery);
		}

		function searchFailure(err) {
			vm.errorMessage = err;
		}

		function killSpinner() {
			vm.waitingForResults = false;
		}

		vm.waitingForResults = true;

		Search.searchWithQuery(vm.searchQuery)
			.then(searchSuccess, searchFailure)
			.finally(killSpinner);
	};

	vm.moveToSpecificProfilePage = function (result) {
		switch(result.type) {
			case "companies":
				$state.go('bf.companies.profile', { id: result.id });
				break;
			case "games":
				$state.go('bf.games.profile', { id: result.id });
				break;
		}
	};

});

/**
 * Created by alexanderventura on 3/24/15.
 */

'use strict';

angular.module('bananafish.companies').controller('CompanySearchCtrl', function ($scope, Company) {

  var vm = this;

  Company.all().then(function (companies) {
    vm.companies = companies;
  });
});

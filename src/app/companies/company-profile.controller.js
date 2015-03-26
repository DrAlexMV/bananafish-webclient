/**
 * Created by alexanderventura on 3/24/15.
 */

'use strict';

angular.module('bananafish.companies').controller('CompanyProfileCtrl', function ($scope, company, $sce) {

  var vm = this;

  company.description = $sce.trustAsHtml(company.description);
  vm.company = company;
});

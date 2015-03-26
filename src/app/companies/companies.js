/**
 * Created by alexanderventura on 3/24/15.
 */

'use strict';

angular.module('bananafish.companies', []).config(function ($stateProvider) {
  $stateProvider
    .state('bf.companies', { url: 'companies/', abstract: true, template: '<ui-view></ui-view>' })
    .state('bf.companies.search', {
      url: 'search',
      templateUrl: 'app/companies/company-search.html',
      controller: 'CompanySearchCtrl as companySearch'
    });
});

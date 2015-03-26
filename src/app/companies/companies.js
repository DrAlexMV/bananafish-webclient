/**
 * Created by alexanderventura on 3/24/15.
 */

'use strict';

angular.module('bananafish.companies', []).config(function ($stateProvider) {

  var pathToTemplates = 'app/companies/';

  $stateProvider
    .state('bf.companies', { url: 'companies/', abstract: true, template: '<ui-view></ui-view>' })
    .state('bf.companies.search', {
      url: 'search',
      templateUrl: pathToTemplates + 'company-search.html',
      controller: 'CompanySearchCtrl as companySearch'
    })
    .state('bf.companies.profile', {
      url: 'profile/:id',
      templateUrl: pathToTemplates + 'company-profile.html',
      controller: 'CompanyProfileCtrl as companyProfile',
      resolve: {
        company: function (Company, $stateParams) {
          return Company.findById($stateParams.id).then(function (company) {
            return company
          });
        }
      }
    });
});

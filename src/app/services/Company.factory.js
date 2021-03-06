/**
 *
 * Created by alexanderventura on 3/24/15.
 */

'use strict';

angular.module('bananafish.companies').factory('Company', function (Restangular, $log) {

  var baseCompanies = Restangular.all('companies');

  return {
    all: function () {
      return baseCompanies.get('').then(function (companies) {
        return companies.companies;
      });
    },
    findById: function (companyId) {
      return baseCompanies.get(companyId);
    }
  };
});

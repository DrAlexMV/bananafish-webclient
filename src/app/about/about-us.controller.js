/**
 * Created by alexanderventura on 3/26/15.
 */


'use strict';

angular.module('bananafish.about').controller('AboutUsCtrl', function (Team) {

  var vm = this;

  Team.getApiaryLink().then(function (link) {
    vm.link = link;
  });

  Team.getTeamMembers().then(function (members) {
    vm.members = members;
  });

  Team.getTeamCommits().then(function (commits) {
    vm.commits = commits;
  });

});

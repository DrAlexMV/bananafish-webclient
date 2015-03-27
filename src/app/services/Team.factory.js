/**
 * Created by alexanderventura on 3/26/15.
 */

'use strict';

angular.module('bananafish.about').factory('Team', function ($q) {

  var teamMembers = [
    {
      name: 'Alexander Ventura',
      bio: 'Born from a cow and a raven. Badass extraordinaire. Milkier than a raven,' +
      'with less feathers than a cow. Sprouted from a banana tree. Cousin of a fish.',
      commits: 20,
      responsibilities: 'Everything minus the report. Because fuck that.',
      image: 'http://sportfishingweekly.com/wp-content/uploads/2013/07/banana-fish1-255x300.jpg'
    },
    {
      name: 'Andy Tang',
      bio: 'Haikus are easy, but sometimes they don\'t make sense, refigerator',
      commits: 12,
      responsibilities: 'Handled more than half of Apiary and a little bit of the Technical Report.',
      image: 'http://sportfishingweekly.com/wp-content/uploads/2013/07/banana-fish1-255x300.jpg'
    },
    {
      name: 'Steven Zvonek',
      bio: 'I am Steven',
      commits: 12,
      responsibilities: 'Managed the Rackspace server, worked on Apiary, commented the models, made UML diagram, helped write the report',
      image: 'http://sportfishingweekly.com/wp-content/uploads/2013/07/banana-fish1-255x300.jpg'
    },
    {
      name: 'Ruben Baeza',
      bio: 'Stuff',
      commits: 4,
      responsibilities: 'Handled "Jobs" section of website. Bugged Everybody',
      image: 'http://sportfishingweekly.com/wp-content/uploads/2013/07/banana-fish1-255x300.jpg'
    },
    {
      name: 'Nico Vasquez',
      bio: 'My name is nico and this is my bio.',
      commits: 12,
      responsibilities: 'I worked on the backend, data collection, and helped with documentation.',
      image: 'http://sportfishingweekly.com/wp-content/uploads/2013/07/banana-fish1-255x300.jpg'
    }
  ];

  var apiaryLink = 'http://docs.bananafish1.apiary.io/#';

  return {
    getTeamMembers: function () {
      var deferred = $q.defer();
      deferred.resolve(teamMembers);
      return deferred.promise;
    },
    getTeamCommits: function () {
      var deferred = $q.defer();

      var sum = function (a, b) {
        return a + b;
      };

      deferred.resolve(_.reduce(_.pluck(teamMembers, 'commits'), sum, 0));
      return deferred.promise;
    },
    getApiaryLink: function () {
      var deferred = $q.defer();
      deferred.resolve(apiaryLink);
      return deferred.promise;
    }
  }
});

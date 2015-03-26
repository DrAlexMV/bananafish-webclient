/**
 * Created by alexanderventura on 3/26/15.
 */

angular.module('bananafish.about').factory('AboutUs', function ($q) {

  var teamMembers = [
    {
      name: 'Alexander Ventura',
      bio: 'Born from a cow and a raven. Badass extraordinaire. Milkier than a raven,' +
      'with less feathers than a cow. Sprouted from a banana tree. Cousin of a fish.',
      commits: 20,
      responsibilities: 'Everything minus the report. Because fuck that.'
    },
    {
      name: 'Andy Tang',
      bio: 'Haikus are easy, but sometimes they don\'t make sense, refigerator',
      commits: 12,
      responsibilities: 'Handled more than half of Apiary and a little bit of the Technical Report.'
    },
    {
      name: 'Steven Zvonek',
      bio: 'I am Steven',
      commits: 12,
      responsibilities: 'Managed the Rackspace server, worked on Apiary, commented the models, made UML diagram, helped write the report'
    },
    {
      name: 'Ruben Baeza',
      bio: 'Stuff',
      commits: 4,
      responsibilities: 'Handled "Jobs" section of website. Bugged Everybody'
    },
    {
      name: 'Nico Vasquez',
      bio: 'My name is nico and this is my bio.',
      commits: 12,
      responsibilities: 'I worked on the backend, data collection, and helped with documentation.'
    }
  ];

  var apiaryLink = '';

  return {
    getTeamMembers: function () {
      var deferred = $q.defer();
      deferred.resolve(teamMembers);
      return deferred.promise;
    },
    getTeamCommits: function () {
      var sum = function (a, b) {
        return a + b;
      };

      return _.reduce(teamMembers, sum, 0);
    }
  }
});

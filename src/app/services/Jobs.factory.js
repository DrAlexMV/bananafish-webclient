/**
 * Created by ruben on 3/26/15.
 */

'use strict';

angular.module('bananafish.jobs').factory('Jobs', function($q){

  var baseJobs = Restangular.all('jobs');

  return{
    all: function(){
      return baseJobs.get('').then(function (jobs){
        return jobs.jobs
      });
    },
    findById: function(jobId){
      return baseJobs.get(jobId)
    }
  };
});

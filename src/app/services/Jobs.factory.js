/**
 * Created by ruben on 3/26/15.
 */

'use strict';

angular.module('bananafish.jobs').factory('Jobs', function($q){
  var jobs = [
    {
      Company: 'Activision',
      JobTitle: 'Associate Product Manager',
      Location: 'Santa Monica, CA',
      Description: 'Activision Blizzard is the parent company of Activision Publishing, Inc. Activision is an Equal Opportunity. The company\'s product portfolio includes Activions... ',
      Url: 'http://www.indeed.com/viewjob?jk=7a770553f96c44a4&qd=7sPhB8bjojX5RZ-qDY65DejLJhV73a1cXUs9uzifl14WXO2p8UZf-A70X4ZZ7V5Z2RSpC1e4RgZawv6pxECeDIIor3IhpTlNDToe8MXhZz0&indpubnum=1942078712727036&atk=19hc5tv481a413ru'
    },

    {
      Company: 'Activision',
      JobTitle: 'Associate Producer-Call of Duty',
      Location: 'Santa Monica, CA',
      Description: 'The Associate Producer is responsible for providing support to the production and development teams in a variety of areas and through all phases of ...',
      Url: 'http://www.indeed.com/viewjob?jk=64a7e07ed1e66c62&qd=7sPhB8bjojX5RZ-qDY65DejLJhV73a1cXUs9uzifl14WXO2p8UZf-A70X4ZZ7V5Z2RSpC1e4RgZawv6pxECeDIIor3IhpTlNDToe8MXhZz0&indpubnum=1942078712727036&atk=19hc5tv481a413ru'
    },

    {
      Company: 'Activision',
      JobTitle: 'Product Manager',
      Location: 'Bloomington, MN',
      Description: 'Activision Publishing is looking for a Product Manager to join our mobile games division. Candidate will own product roadmaps for multiple titles based on top...',
      Url: 'http://www.indeed.com/viewjob?jk=6b3fffd20cc1f157&qd=7sPhB8bjojX5RZ-qDY65DejLJhV73a1cXUs9uzifl14WXO2p8UZf-A70X4ZZ7V5Z2RSpC1e4RgZawv6pxECeDIIor3IhpTlNDToe8MXhZz0&indpubnum=1942078712727036&atk=19hc5tv481a413ru'
    },

    {
      Company: 'Activision',
      JobTitle: 'Recruiting Coordinator',
      Location: 'El Segundo, CA',
      Description: 'At Activision Publishing , you will help take some of the biggest brands. Great Games Start with Great People!...',
      Url: 'http://www.indeed.com/viewjob?jk=492abe45a67d3732&qd=7sPhB8bjojX5RZ-qDY65DejLJhV73a1cXUs9uzifl14WXO2p8UZf-A70X4ZZ7V5Z2RSpC1e4RgZawv6pxECeDIIor3IhpTlNDToe8MXhZz0&indpubnum=1942078712727036&atk=19hc5tv481a413ru'
    },

    {
      Company: 'Activision',
      JobTitle: 'Jr. Video Editor / Motion Graphics Artist (TEMPORARY)',
      Location: 'Santa Monica, CA',
      Description: 'Jr. Video Editor / Motion Graphics Artist I. Basic Function: This role provides support services to all engaged departments: PR, Marketing, Production and',
      Url: 'http://www.indeed.com/viewjob?jk=c724ee0330e10139&qd=7sPhB8bjojX5RZ-qDY65DejLJhV73a1cXUs9uzifl14WXO2p8UZf-A70X4ZZ7V5Z2RSpC1e4RgZawv6pxECeDIIor3IhpTlNDToe8MXhZz0&indpubnum=1942078712727036&atk=19hc5tv481a413ru'
    },

    {
      Company: 'Activision',
      JobTitle: 'QA Tester - Raven',
      Location: 'Middleton, WI',
      Description: 'RAVEN SOFTWARE , developer of numerous award-winning games, including contributions to the blockbuster Call of Duty franchise [Black Ops, Modern Warfare,',
      Url: 'http://www.indeed.com/viewjob?jk=6f7f1d988fcfd5f5&qd=7sPhB8bjojX5RZ-qDY65DejLJhV73a1cXUs9uzifl14WXO2p8UZf-A70X4ZZ7V5Z2RSpC1e4RgZawv6pxECeDIIor3IhpTlNDToe8MXhZz0&indpubnum=1942078712727036&atk=19hc5tv481a413ru'
    },

    {
      Company: 'Activision',
      JobTitle: 'Game Systems Designer',
      Location: 'Bloomington, MN',
      Description: 'Activision Publishing is looking for a Game Systems Designer to join our mobile games division. Candidate will influence game systems design and economy..',
      Url: 'http://www.indeed.com/viewjob?jk=fe1e68963b3c2f5b&qd=7sPhB8bjojX5RZ-qDY65DejLJhV73a1cXUs9uzifl14WXO2p8UZf-A70X4ZZ7V5Z2RSpC1e4RgZawv6pxECeDIIor3IhpTlNDToe8MXhZz0&indpubnum=1942078712727036&atk=19hc5tv481a413ru'
    },

    {
      Company: 'Activision',
      JobTitle: 'Social Media Manager, Digital Marketing',
      Location: 'Santa Monica, CA',
      Description: 'Activision Blizzard is the parent company of Activision Publishing, Inc. Who works at Activision, or with Activision, their favorite thing about it, and they’ll...',
      Url: 'http://www.indeed.com/viewjob?jk=a422135010eec21c&qd=7sPhB8bjojX5RZ-qDY65DejLJhV73a1cXUs9uzifl14WXO2p8UZf-A70X4ZZ7V5Z2RSpC1e4RgZawv6pxECeDIIor3IhpTlNDToe8MXhZz0&indpubnum=1942078712727036&atk=19hc5tv481a413ru'
    },

    {
      Company: 'Electronic Arts',
      JobTitle: 'Contract Quality Analyst - Bioware',
      Location: 'Austin, TX',
      Description: 'Contract QA Analyst BioWare Austin is looking for a Contract QA Analyst for the Star Wars: The Old Republic team. Please note: This is a temporary, on-site',
      Url: 'http://www.indeed.com/viewjob?jk=47b339d7abd20898&qd=7sPhB8bjojX5RZ-qDY65DWkmTM7z_j8YrCtTeKW7FlDfvJ5_2adfPq2rXoo3Ud9u_c_Xzw2cYa2t4i_x7fCjpKM7nzRHed60mU6Kdom8ZfE&indpubnum=1942078712727036&atk=19hc733a318f25gh'
    },

    {
      Company: 'Electronic Arts',
      JobTitle: 'Consumer Insights Analyst',
      Location: 'Redwood City, CA',
      Description: 'CHALLENGE THE EXPECTED At EA, we thrive on outrageous thinking. It\'s the fuel that inspires the best games in the world. We\'re a community of artists,',
      Url: 'http://www.indeed.com/viewjob?jk=f17d93b7a2d2bcc5&qd=7sPhB8bjojX5RZ-qDY65DWkmTM7z_j8YrCtTeKW7FlDfvJ5_2adfPq2rXoo3Ud9u_c_Xzw2cYa2t4i_x7fCjpKM7nzRHed60mU6Kdom8ZfE&indpubnum=1942078712727036&atk=19hc733a318f25gh'
    }

  ];

  return{
    getJobs: function () {
      var deferred = $q.defer();
      deferred.resolve(jobs);
      return deferred.promise;}}

});

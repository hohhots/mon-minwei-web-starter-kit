'use strict';

angular.
  module('learnMongolApp').
  config(['$stateProvider','$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/subjects');

      var subjectsState = {
        name: 'subjects',
        url: '/subjects',
        template: '<subject-list></subject-list>'
      };

      var subjectState = {
        name: 'subject',
        url: '/subject/{subjectId}',
        template: '<mission-list></mission-list>'
      };

      $stateProvider.state(subjectsState);
      $stateProvider.state(subjectState);
    }
  ]);

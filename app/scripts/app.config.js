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

      var missionsState = {
        name: 'mission',
        url: '/missions',
        template: '<mission-list></mission-list>'
      };

      $stateProvider.state(subjectsState);
      $stateProvider.state(missionsState);

    }
  ]);

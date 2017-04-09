'use strict';

angular.
  module('learnMongolApp').
  config(['$stateProvider','$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      var homeState = {
        name: 'home',
        url: '/',
        template: '<h3>hello world!</h3>'
      };

      var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
      };

      $stateProvider.state(homeState);
      $stateProvider.state(aboutState);

    }
  ]);

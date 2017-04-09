'use strict';

angular.
  module('core.subject').
  factory('Subject', ['$resource',
    function($resource) {
      return $resource('data/:subjectId.json', {}, {
        query: {
          method: 'GET',
          params: {subjectId: 'rootMenu'},
          isArray: true
        }
      });
    }
  ]);

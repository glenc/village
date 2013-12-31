'use strict';

angular.module('adminApp')
  .controller('FamilyReportCtrl', function ($scope, $routeParams, QueryService) {
    var fixCase = function(str) {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    if ($routeParams.status) {
      $scope.title = fixCase($routeParams.status) + ' Families';
    } else {
      $scope.title = 'All Families';
    }

    QueryService.family.query($routeParams.status, 'names', function(results) {
      $scope.families = results;
    });
  });

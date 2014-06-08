angular.module('app')
.controller('EventBriteEventCtrl', ['$scope', '$routeParams', '$location', 'EventBriteService', 
  function($scope, $routeParams, $location, EventBriteService) {
    var id = $routeParams.id;

    EventBriteService.get(id).then(function(result){
      $scope.event = result;
    });

    $scope.deleteEvent = function() {
      EventBriteService.delete(id).then(function(){
        $location.path('/events');
      });
    }
  }
]);
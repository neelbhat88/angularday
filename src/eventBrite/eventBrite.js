angular.module('app')
.controller('EventBriteCtrl', function($log, $scope, EventBriteService) {

  EventBriteService.list().then(function(result) {
    $scope.events = result;

    return result; // DONT BREAK THE PROMISE SO SOMEONE CAN CHAIN OFF OF ME
                  // Do this if I set the .list() to a variable so someone can chain off later
  });

  var Guid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r, v;
      r = Math.random() * 16 | 0;
      v = (c === 'x' ? r : r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  $scope.addEvent = function(name, location, date) {
    var event = {event_id: Guid(), what: name, where: location, when: date};
    $scope.events.push(event);

    // Angular can broadcast 
    $scope.$broadcast('notify', event);
  }
});

angular.module('app')
.service('EventBriteService', ['$http', function($http){
  // Get all events
  this.list = function() {
    return $http.get('http://workshop-api-1.herokuapp.com/events.json')
    .then(function(result){
      return result.data;
    });
  };

  this.get = function(id) {
    return $http.get('http://workshop-api-1.herokuapp.com/events/' + id + '.json')
    .then(function(result) {
      return result.data;
    })
  };

  this.delete = function(id) {
    return $http.delete('http://workshop-api-1.herokuapp.com/events/' + id + '.json')
    .then(function(result) {
      return result.data;
    })
  }
}]);

angular.module('app')
.config(function($routeProvider){
  $routeProvider.when('/events', {
    caption: 'Events', // Written by Cary to pull all captions from routes and display in nav bar
    controller: 'EventBriteCtrl',
    templateUrl: '/eventBrite/eventBrite.tmpl.html'
  })
  .when('/events/:id', {
    controller: 'EventBriteEventCtrl',
    templateUrl: '/eventBrite/eventBriteEvent.tmpl.html'
  });
});
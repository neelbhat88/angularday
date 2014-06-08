angular.module('app')
.directive('notifications', ['$log', '$timeout', function($log, $timeout) {
  return {
    link: function(scope, element, attrs) {
      scope.$on('notify', function (e, payload){
        scope.newNotification = true;
        scope.eventDetails = payload;

        $timeout(function(){
          scope.newNotification = false;
        }, 4000);
      });
    },
    replace: true, // Removes the <noticiation> element from the markup
    restrict: 'E', // A - attribute, or C - class
    templateUrl: '/eventBrite/notifications.tmpl.html'
  }
}]);
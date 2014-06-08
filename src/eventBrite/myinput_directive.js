angular.module('app')
.directive('myinput', [function(){
  return {
    scope: {
      caption: '@', // @ - string, & - function, = - twoway binding (send to the controllers scope)
      model: '='
    },
    // link: function(scope, element, attrs) {
    //   scope.caption = attrs["caption"];
    // },
    restrict: 'E',
    templateUrl: '/eventBrite/myinput.tmpl.html'
  }
}]);
angular.module('app')
.directive('myform', [function(){
  return {
    restrict: 'E',
    scope: {
      submit: '&', // & - function
    },
    transclude: true,
    templateUrl: '/eventBrite/myform.tmpl.html'
  }
}]);
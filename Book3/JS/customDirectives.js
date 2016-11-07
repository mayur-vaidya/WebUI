app.directive('numbersOnly', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        if (text) {
          var transformedInput = text.replace(/[^0-9]/g, '');
          if (transformedInput !== text) {
            ngModelCtrl.$setViewValue(transformedInput);
            ngModelCtrl.$render();
          }
          return transformedInput;
        }
        return undefined;
      }
      ngModelCtrl.$parsers.push(fromUser);
    }
  };
});

app.directive('imageNotFound', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        attrs.$set('src', '404.jpg');
     });
    }
  }
});

app.directive('modal', function () {
  return {
    template: '<div class="modal fade" data-backdrop="static">' +
              '<div class="modal-body" ng-transclude> </div>' +
              '</div>',
    restrict: 'E',
    transclude: true,
    replace:true,
    scope:true,
    link: function postLink(scope, element, attrs) {
      scope.$watch(attrs.visible, function(value){
        if(value == true)
          $(element).modal('show');
        else
          $(element).modal('hide');
      });
      $(element).on('hidden.bs.modal', function(){
        scope.$apply(function(){
          scope.$parent[attrs.visible] = false;
        });
      });
    }
  };
});
// app.directive('showImage', function() {
//   return {
//     restrict: 'E',
//     templateUrl: 'tile-image.html'
//   }
// });

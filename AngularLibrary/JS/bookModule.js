var app = angular.module('bookApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('homepage', {
        url: '/home',
        templateUrl: 'home.html'
    })
      .state('homepage.book', {
          url: '/:bookName/page:page',
          templateUrl: 'tiles.html'
      })
      .state('homepage.contact', {
        url: '/contactUs',
        templateUrl: 'contact.html'
    })
    .state('homepage.view', {
      url: '/view',
      templateUrl: 'showAll.html'
  })
  .state('homepage.book.image', {
      url: '/:bookId',
      templateUrl: 'image-modal.html'
  })
});

app.directive('numbersOnly', function () {
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

app.directive('showImage', function() {
  return {
    restrict: 'E',
    templateUrl: 'tile-image.html'
  }
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

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
      template: '<book-tiles></book-tiles>'
    })

    .state('homepage.contact', {
      url: '/contactUs',
      template: '<contact></contact>'
    })
    .state('homepage.view', {
      url: '/view',
      template: '<view></view>'
    })
});

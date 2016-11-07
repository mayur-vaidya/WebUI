app.service('BookObjectService', ['$http', '$stateParams', function($http, $stateParams) {
  return {
    getBooksData : function() {
      var page = $stateParams.page;
      var subject = $stateParams.bookName;
      $('#pages').hide();
      var dynamicUrl = 'http://it-ebooks-api.info/v1/search/' + subject + '/page/' + page;
      console.log(dynamicUrl);
      return $http.get(dynamicUrl)
        .then(function(response) {
          $('#pages').show();
          $('#loading').hide();
          return response.data;
        });
      }
    };
}]);

app.component('bookTiles', {
  templateUrl: 'tile.html',
  controller: tileController
});

function tileController(BookObjectService, $stateParams) {
  var demo = this;
  this.book = $stateParams.bookName;
  BookObjectService.getBooksData()
    .then(function(data) {
      var page = parseInt($stateParams.page);
      var totalPages = Math.ceil(parseInt(data.Total) / 10);
      if(page > 1) {
        demo.previousPage = page - 1;
      }
      else {
        demo.previousPage = page;
      }
      if(page < totalPages) {
        demo.nextPage = page + 1;
      }
      else {
        demo.nextPage = page;
      }
      demo.Books = data.Books;
   });
};


app.controller('tileController', ['$scope', '$stateParams', 'BookObjectService', function($scope, $stateParams, BookObjectService) {
  BookObjectService.getBooksData()
    .then(function(data) {
      var page = parseInt($stateParams.page);
      var totalPages = Math.ceil(parseInt(data.Total) / 10);
      //$scope.bookName = $stateParams.bookName;
      if(page > 1) {
        $scope.previousPage = page - 1;
      }
      else {
        $scope.previousPage = page;
      }
      if(page < totalPages) {
        $scope.nextPage = page + 1;
      }
      else {
        $scope.nextPage = page;
      }
      this.Books = data.Books;
    });
}]);

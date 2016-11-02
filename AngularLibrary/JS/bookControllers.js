app.controller('tileController', ['$scope', '$stateParams', 'BookObjectService', function($scope, $stateParams, BookObjectService) {
  BookObjectService.getBooksData()
  .then(function(data) {
    var page = parseInt($stateParams.page);
    var totalPages = Math.ceil(parseInt(data.Total)/10);
    $scope.books = $stateParams.bookName;
    if(page > 1) { $scope.previousPage = page - 1; }
    else { $scope.previousPage = page; }
    if(page < totalPages) { $scope.nextPage = page + 1; }
    else { $scope.previousPage = page; }
    $scope.Books = data.Books;
  });
}]);

app.controller('bookNameController', function($scope) {
  $scope.bookNames = ["php", "java", "ruby", ".net", "oracle", "python", "html", "css", "jquery"];
});

app.controller('ViewData',['contactData', '$scope', function(contactData, $scope) {
  $scope.userData = contactData.getInfo();
}]);

app.controller('getContactInfo', ['contactData', '$scope', function(contactData, $scope) {
   $scope.saveDetail = function() {
     var name = $scope.userName;
     var mobile = $scope.val;
     if(mobile != undefined && mobile.length == 10 && name.length > 0) {
       $scope.userName = "";
       $scope.val = "";
       $scope.errorMsg = "";
       contactData.saveInfo(name, mobile);
      }
      else {
        $scope.errorMsg = "Make sure you enter valid details";
      }
    }
 }]);

app.controller('ImageModal', function($scope) {
  var image = $('.tile-image').attr('ng-src');
  console.log(image);
});

app.component('view', {
  templateUrl: 'showAll.html'
});

app.controller('ViewData', ['contactData', '$scope', function(contactData, $scope) {
 $scope.userData = contactData.getInfo();
}]);

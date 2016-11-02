app.service('BookObjectService', ['$http', '$stateParams', function($http, $stateParams) {
  return {
    getBooksData : function() {
      var page = $stateParams.page;
      var subject = $stateParams.bookName;
      dynamicUrl = 'http://it-ebooks-api.info/v1/search/' + subject + '/page/' + page;
      return $http.get(dynamicUrl)
        .then(function(response) {
          return response.data;
        });
      }
    };
}]);

app.service('contactData', function() {
  var contactDetail = [];
  return {
    saveInfo: function (name, mobile) {
      var details = {
        fname: name,
        mob: mobile
      }
      contactDetail.push(details);
    },
    getInfo: function() {
      return contactDetail;
    }
  };
});

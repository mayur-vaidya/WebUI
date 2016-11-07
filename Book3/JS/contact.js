app.component('contact', {
  templateUrl: 'contact.html',
  controller: getContactInfo
});

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

function getContactInfo(contactData){
  var demo = this;
  demo.saveDetail = function() {
    var name = demo.userName;
    var mobile = demo.val;
    if(mobile != undefined && mobile.length == 10 && name.length > 0) {
      console.log('in');
      demo.userName = '';
      demo.val = '';
      demo.errorMsg2 = '';
      demo.errorMsg1 = '';
      contactData.saveInfo(name, mobile);
     }
     if (name == undefined || name.length == 0) {
       demo.errorMsg1 = 'Name field is still empty';
     }
     else {
       demo.errorMsg1 = '';
     }
     if (mobile == undefined || mobile.length < 10) {
       demo.errorMsg2 = 'Enter a 10 digit valid mobile number';
     }
  }
}
// app.controller('getContactInfo', ['contactData', '$scope', function(contactData, $scope) {
//    $scope.saveDetail = function() {
//      var name = $scope.userName;
//      var mobile = $scope.val;
//      if(mobile != undefined && mobile.length == 10 && name.length > 0) {
//        $scope.userName = '';
//        $scope.val = '';
//        $scope.errorMsg2 = '';
//        $scope.errorMsg1 = '';
//        contactData.saveInfo(name, mobile);
//       }
//       if (name == undefined || name.length == 0) {
//         $scope.errorMsg1 = 'Name field is still empty';
//       }
//       else {
//         $scope.errorMsg1 = '';
//       }
//       if (mobile == undefined || mobile.length < 10) {
//         $scope.errorMsg2 = 'Enter a 10 digit mobile number';
//       }
//     }
//  }]);

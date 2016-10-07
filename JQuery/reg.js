$(document).ready(function(){
  $("button").click(function(){
    var fname = $("#firstname").val();
    var lname = $("#lastname").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var phoneNumber = parseInt(phone);
    console.log(fname);
    if(fname[0] != fname[0].toUpperCase()){
      alert("please fill the first name properly with first letter capital 'A'.");
    }
    if(lname[0] != lname[0].toUpperCase()){
      alert("please fill the last name properly with first letter capital 'A'");
    }
    if(email.length == 0){

      alert("please fill the email");
    }
    if(phoneNumber.length == 0 || isNaN(phoneNumber) || phoneNumber.length != 10 || phoneNumber.length > 10){
      alert("please enter the valid number!!!");
    }
  });
});

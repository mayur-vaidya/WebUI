function myFunction() {
   window.alert("Do you really want to view image!!!");
   document.getElementById("demo").src = "treehouse.png"
}

function personDetails(){
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};
document.getElementById("demo1").innerHTML = person.fullName();

car1();
  function car1(){
  var car = "fiat";
  console.log(car);
}

car2();
  var car2 = function(){
  var newcar="New Car";
  console.log(newcar);
}
}



function stringMethods() {
    var str = document.getElementById("p1").innerHTML;
    var pos = str.indexOf("where");
    document.getElementById("demo3").innerHTML = "first index is: " + pos;
    document.getElementById("demo4").innerHTML = "last index is: " + pos;
}

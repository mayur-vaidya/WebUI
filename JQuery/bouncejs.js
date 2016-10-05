$(document).ready(function(){
    $("#eventOne").click(function(){
      // console.log($("#theBall"))
      //  $("#theBall").animate({left: '250px'});
      moveDown();
    });
});

function moveDown() {
  $("#theBall").animate({top: '250px'});
  moveUp();
}

function moveUp() {
  $("#theBall").animate({top: '0px'});
  moveDown()
}

// function moveUp(){
//     $("#theBall").animate({top: '250px'},1000);
// }
//
// function moveDown(){
//     $("#theBall").animate({top: '0px'}, 1000);
// }

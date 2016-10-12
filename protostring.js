String.prototype.replaceAll = function() {
    var target = this;
    return target.split(" ").join("-");
};

String.prototype.numberToString = function() {
    var target = this;
    var storing = "";
    var strlength = target.length;
    var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(var a = 0; a < strlength; a++) {
      if(isNaN( target[a]) || target[a] == " ") {
        storing += target[a];
      }
      else {
        for(var i = 0; i < 10; i++) {
          if(target[a] == i) {
            storing += numbers[i];
          }
        }
      }
    }
    return storing;
};

$(document).ready(function() {
    $('button.hit').on('click',function() {
      var convert;
      var enteredstr = $('#data').val();
      convert = enteredstr.numberToString();
      var output = convert.replaceAll();
      $('#converted').text(output);
    });
});

Date.prototype.dateToString= function() {
    var time = this;
    var fullDate;
    var today = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var once = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen","Ninteen"];
    var tens = ["", "", "Twenty ","Thirty ", "Fourty ", "Fifty ", "Sixty ", "Seventy ", "Eighty ", "Ninty "];
    var thismonth = monthName[month];
    var dateName = dateString(today);
    var yearName = yearString(year);


    function dateString(today) {
      var thisday = "";
      if(today < 20) {
        thisday += once[today];
      }

      else {
        var tensdigit = Math.floor(today / 10);
        if(tensdigit == 2) {
          thisday += tens[2];
        }
        if(tensdigit == 3) {
          thisday += tens[3];
        }
        var oncedigit = today % 10;
        for(var i = 0; i < 10; i++) {
          if(oncedigit == i) {
            thisday += once[i];
          }
        }
      }
      return thisday;
    };

    function yearString(year) {
      var thisyear = "Two Thousand ";
      var twodigits = year % 1000;
      var tensdigit = Math.floor(twodigits / 10);
      var oncedigit = twodigits % 10;
      if(twodigits < 20) {
        thisyear += once[twodigits];
      }
      else {
        for(var v = 2; v < 10; v++) {
        if(tensdigit == v) {
          thisyear += tens[v];
        }
      }
        for(var i = 0; i < 10; i++) {
          if(oncedigit == i) {
            thisyear += once[i];
          }
        }
      }
      return thisyear;
    };
    fullDate = dateName + ", " + thismonth + ", " + yearName;
    return fullDate;
};

$(document).ready(function() {
    $('button.hit').on('click', function() {
      var d = new Date();
      var enteredDate = $('#date').val();
      var enteredMonth = $('#month').val();
      var enteredYear = $('#year').val();
      d.setDate(enteredDate);
      d.setMonth(enteredMonth-1);
      d.setFullYear(enteredYear);
      var stringDate = d.dateToString();
      $('#converted').text(stringDate);
    });
});

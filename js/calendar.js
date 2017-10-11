(function(){
    var date = new Date();
    month_name = ['Jan', 'Feb', 'Mar', 'Aprl', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    month = date.getMonth();
    //console.log(month);
    year = date.getFullYear();
    //console.log(year);

    $('.prev').on('click', function(){
      //alert('prev');
      var prev = 'prev';
      siwtchMonth(prev);
    })

    $('.next').on('click', function(){
      //alert('next');
      var next = 'next';
      siwtchMonth(next);
    })

    /*On next and previous button click calendar for prevois months*/
    function siwtchMonth(next_prev){
      //console.log(next_prev);
      if(next_prev == 'prev'){
        if(month == 0){
          month = 11;
          year = year - 1;
        }else {
          month = month - 1;
          year = year;
        }
      }else{
        if(month == 11){
          month = 0;
          year = year + 1;
        }else {
          month = month + 1;
          year = year;
        }
      }

      first_date = month_name[month] + " " + 1 + " " + year;
      //console.log(first_date);
      tempdate = new Date(first_date).toDateString();
      //console.log(tempdate);
      first_day = tempdate.substring(0, 3);
      //console.log(first_day);
      day_no = day_name.indexOf(first_day);
      //console.log(day_no);
      days = new Date(year, month+1, 0).getDate();
      //console.log(days);

      month_year = month_name[month] + " " + year;

      $('#calendar-month-year').html(month_year);

      var calendar = get_calendar(day_no, days, month, year);

      $('#calendar-dates').html(calendar);

    }

    /*On page load calendar*/
    first_date1 = month_name[month] + " " + 1 + " " + year;
    tempdate1 = new Date(first_date1).toDateString();
    first_day1 = tempdate1.substring(0, 3);
    day_no1 = day_name.indexOf(first_day1);
    days1 = new Date(year, month+1, 0).getDate();
    var calendar = get_calendar(day_no1, days1, month, year);
    $('#calendar-dates').html(calendar);
    month_year = month_name[month] + " " + year;
    $('#calendar-month-year').html(month_year);

    function get_calendar(day_no, days, month, year){

      var date = new Date();
      var mon = date.getMonth()
      var y = date.getFullYear();

      var table = '<table id="calendar">';
      var tr = '<tr>';

      //create first row as day first name
      for (var c = 0; c < 7 ; c++){
        tr +='<td>' + "SMTWTFS"[c] +'</td>';
      }
      tr += '</tr>'
      table += tr;

      tr = '<tr>';
      var c;
      for(c = 0; c < 7; c++){
        if(c == day_no){
          break;
        }
        tr +='<td >' + "" +'</td>';
      }

      var count = 1;
      for( ; c < 7; c++){
        if(count == date.getDate() && month == mon && year == y){
          tr +='<td id="' + count+ "-" + (month + 1) + "-"+ year +'" class="current days">' + count +'</td>';
        }else{
          tr +='<td id="' + count+ "-" + (month + 1) + "-"+ year +'" class=" days">' + count +'</td>';
        }
        count++;
      }
      tr += '</tr>'
      table += tr;

      for(var c = 3; c < 8; c++){
        var tr = '<tr>';
        for (var i = 0; i < 7; i++) {

          if(count > days){
            tr += '</tr>'
            table += tr + '</table>';
            return table;
          }
          
          if(count == date.getDate() && month == mon && year == y){
            tr +='<td id="' + count+ "-" + (month + 1) + "-"+ year +'" class="current days">' + count +'</td>';
          }else{
            tr +='<td id="' + count+ "-" + (month + 1) + "-"+ year +'" class="days">' + count +'</td>';
          }
          count ++;
        }
        tr += '</tr>'
        table += tr;
      }

      table += '</table>';
      return table;
      }

    })();

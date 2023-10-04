$(function () {
  // define variables that will be used throughout
  var currentHour = dayjs();
  var calendar = $("#calendar");

  // populates textareas from localStorage, if there is no data in local storage sets textarea to ""
  for(var x = 0; x < calendar.children().length; x++){
    var hour = x + 9;
    var textInfo = localStorage.getItem("hour-"+ hour);
    if(!(textInfo === undefined)){
      $("#hour-"+ hour).children("textarea").val(textInfo);
    }
    if(currentHour.hour() < hour){
      $("#hour-"+hour).addClass("future");
    }
    else if(currentHour.hour() > hour){
      $("#hour-"+hour).addClass("past");
    }
    else {
      $("#hour-"+hour).addClass("present");
    }
  }
  //setting if statements for days ending in st nd rd and th
  if(currentHour.date() === 1 || currentHour.date() === 21 || currentHour.date() === 31){
    $("#currentDay").text(currentHour.format("dddd, MMMM  D") + "st");
  }
  else if(currentHour.date() === 2 || currentHour.date() === 22){
    $("#currentDay").text(currentHour.format("dddd, MMMM  D") + "nd");
  }
  else if(currentHour.date() === 3 || currentHour.date() === 23){
    $("#currentDay").text(currentHour.format("dddd, MMMM  D") + "rd");
  }
  else{
    $("#currentDay").text(currentHour.format("dddd, MMMM  D") + "th");
  }

  //creates a listener on the DOM but delegates it to the button element and stores textarea to localstorage
  $(document).on("click", "button", function(event) {
    var btn = $(event.target);
    var textArea = btn.parent().children().eq("1");
    localStorage.setItem(textArea.parent().attr("id"), textArea.val());
  });
});

//make multiple timeblocks
//rename timeblocks according
//event listener on time-block to delegate to button
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentHour = dayjs();
  var calendar = $("#calendar");

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
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(document).on("click", "button", function(event) {
    var btn = $(event.target);
    var textArea = btn.parent().children().eq("1");
    console.log(event.target);
    console.log($(event.target));
    console.log(btn.parent().children().eq("1"));
    console.log("Button Clicked!");
    localStorage.setItem(textArea.parent().attr("id"), textArea.val());
  });
});
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


//make multiple timeblocks
//rename timeblocks according
//event listener on time-block to delegate to button
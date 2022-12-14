// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.






$(function () {
  const $currentDay = $('#currentDay');
  const $timeContainer = $('#time-container');

  const $tooltip = $(".custom-tooltip");

  


  // when user visit this page --- should see a clock
  displayClock();


  function showSavedTooltip(xPos, yPos) {

    $tooltip.attr('style', `top: ${yPos}px; left: ${xPos -50}px`)


    // Transition
    $tooltip.removeClass('d-none');

    setTimeout(function () {
      $tooltip.addClass('d-none');
    }, 1500);
  }


  function createTimeRow(time) {

    const hourNow = Number(dayjs().format('H'));  // 24 hr format

    const $row = $('<div id="hour-9" class="row time-block">')

    // past timeslot -- grey
    const isPast = time < hourNow;
    const isCurrent = time === hourNow;
    const isFuture = time > hourNow;

    if (isPast) {
      $row.addClass('past');
    }

    // current timeslot -- red
    if (isCurrent) {
      $row.addClass('present')
    }

    // future timeslot -- green
    if (isFuture) {
      $row.addClass('future')
    }

    const $timeCol = $('<div class="col-2 col-md-1 hour text-center py-3">')

    $timeCol.text(time);

    $row.append($timeCol);

    const $textareaCol = $('<textarea class="col-8 col-md-10 description" rows="3">')

    const existingNote = localStorage.getItem(time);

    if (existingNote !== null) {
      $textareaCol.val(existingNote);
    }


    $row.append($textareaCol);


    const $button = $('<button class="btn saveBtn col-2 col-md-1" aria-label="save">');
    const $icon = $('<i class="fas fa-save" aria-hidden="true"></i>');

    $button.append($icon);
    $row.append($button);

    // user click on save button on a time row
    // save the text of the row to storage (local storage)
    $button.on('click', function (e) {
      
      // grab the textarea input
      const input = $button.siblings("textarea").val();

      // save to local storage
      localStorage.setItem(time, input);

      const offset = $button.offset();
      console.log(offset)

      showSavedTooltip(offset.left, offset.top);

    });


    return $row;
  }



  function displayClock() {
    const now = dayjs();
    const todayDate = now.format('YYYY-MM-DD HH:mm:ss');

    $currentDay.text(todayDate);
  }

  setInterval(displayClock, 1000);


  // user should see table, from 9am - 5pm
  // with existing notes from storage if available
  for (let time = 9; time < 18; time++) {
    
    const timeRow = createTimeRow(time);
    
    $timeContainer.append(timeRow);

  }




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

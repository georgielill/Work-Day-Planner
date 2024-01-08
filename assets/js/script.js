$(document).ready(function () {

  function displayTime() {
    $('#currentDay').text(dayjs().format("dddd, MMMM D, YYYY"))
    $('#currentTime').text(dayjs().format("h:mm:ss"))

  }

  setInterval(displayTime, 1000)
})
function updateHour() {
  let currentHour = dayjs().hour()
  let timeBlocks = $('.time-block')

  timeBlocks.each(function () {
    let blockHour = parseInt($(this).attr('id'));


    if (currentHour > blockHour) {
      $(this).removeClass("present future");
      $(this).addClass("past");
    } else if (currentHour === blockHour) {
      $(this).removeClass("past future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past present");
      $(this).addClass("future");
    }

  });
}
setInterval(updateHour, 15000);



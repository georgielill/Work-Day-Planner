$(document).ready(function () {

  function displayTime() {
    $('#currentDay').text(dayjs().format("dddd, MMMM D, YYYY"))
    $('#currentTime').text(dayjs().format("h:mm:ss"))

  }

  setInterval(displayTime, 1000)
})

$(function () {
  $.ajax({
    type: "POST",
    url: "http://ecourse.cpe.ku.ac.th/exceed/api/larmpalm_qr/set?value=9",
    success: function (response) {
      console.log(response)
    }
  });
  var myVar = setInterval(myTimer, 10000);

  function myTimer() {

    window.location.href = ("http://e5435b89.ngrok.io");

  }


})
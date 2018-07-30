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
    //Varcar user URL... 
    window.location.href = ("./Varcar/index.html");

  }


})
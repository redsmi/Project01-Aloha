console.log('Hello script this is working yeah')

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });
  
    $("#newsletter").on("submit",function(){
    var emailSub;
    emailSub = $('input').val();
    console.log(emailSub);

    if ($("#your-email").val() == "") {
      alert("Please submit a valid email address.");
      return false;
    } else {
      alert("Thanks for subscribing!");
    }
  });
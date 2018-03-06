$( document ).ready(function(){

  $('.main-carousel').flickity({
      // options
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      autoPlay: true
    });
    
  $("#newsletter").on("submit",function(event){
    event.preventDefault(); 
    if ($("#your-email").val() == "") {
      alert("Please submit a valid email address.");
    } else {
      alert("Thanks for subscribing!");
    }
  });

});
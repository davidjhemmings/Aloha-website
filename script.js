$("#form").on("submit", function(event) {
    event.preventDefault();
    if ($("input[type='email']").val() == "") {
      alert("You missed the field.");
    } else {
      alert("Thanks for filling the field!");
    }
  });


  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
  
  });




// Business Logic
$(document).ready(function(){
  $('.card').hover(function(){
    $('.pjName',this).toggle('1000');
  }, (function(){
    $('.pjName',this).toggle('1000');
    }));


    
    // // $('.process-icon1').click(function(){
    // //   $('.hide1').toggle('slow');
    // // });

    // $('.process-icon2').click(function(){
    //   $('.hide2').toggle('slow');
    // });

    // // $('.process-icon3').click(function(){
    // //   $('.hide3').toggle('slow');
    // // });

    $('.process-icon1').click(function(){
      $('.hide1').show(function(){
        $('.process-icon1').hide('100');
      });
    });

    $('.process-icon2').click(function(){
      $('.hide2').show(function(){
        $('.process-icon2').hide('slow');
      });
    });

    $('.process-icon3').click(function(){
      $('.hide3').show(function(){
        $('.process-icon3').hide('slow');
      });
    });

    $('.hide1').click(function(){
      $('.process-icon1').show(function(){
        $('.hide1').hide('slow');
      });
    });

    $('.hide2').click(function(){
      $('.process-icon2').show(function(){
        $('.hide2').hide('slow');
      });
    });

    $('.hide3').click(function(){
      $('.process-icon3').show(function(){
        $('.hide3').hide('slow');
      });
    });
 

  // UI Logic
  $('#form').submit(function(e){
    e.preventDefault();
    if (($('input#user').val() =="") || ($("input#mail").val() =="") || ($("textarea#msg").val()=="")){
      alert("Please ensure all entries in the form are filled");
      // return false;
    }
    else {
      alert("Thank you" + " " + $('input#user').val() + " " + "for contacting Delani Studio. We'll get back to you soon!");
      // return true;
     }
  });
});
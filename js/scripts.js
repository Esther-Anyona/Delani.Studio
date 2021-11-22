// Business Logic
$(document).ready(function(){
  $('.card').hover(function(){
    $('.pjName',this).toggle('1000');
  }, (function(){
    $('.pjName',this).toggle('1000');
    }));
 


  // ((name===value) && (email===value) && (message===value));
  // UI Logic
  $('#form').submit(function(e){
    e.preventDefault();
    let name= $('input#user').val();
    let email= $("input#mail").val();
    let message= $("textarea#msg").val();

    // form input validation

    if ((name =="") || (email =="") || (message=="")){
      alert("Please fill all the fields in the form");
      // return false;
    }
    else {
      alert("Thank you" + " " + name + " " + "for contacting Delani Studio. We'll get back to you soon!");
      // return true;
    }
    
  });
});
// Business Logic
$(document).ready(function(){




  // UI Logic
  $('#form').submit(function(){
    let name= $('input#user').val();
    let email= $("input#mail").val();
    let message= $("textarea#msg").val();
    // form input validation
    if ((name =="") || (email =="") || (message=="")){
      alert("Please fill all the fields in the form");
      return false;
    }
    // else((name===value) && (email===value) && (message===value));{
    //   alert("Thank you" + " " + name + " " + "for contacting Delani Studio. We'll get back to you soon!");
    //   return true;
    // };
    
  });
});
/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.

$(document).ready(function() {
  
  $(function () {
  $('[data-toggle="tooltip"]').tooltip()
  });

  jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z ]+$/i.test(value);
  }, "Letters and spaces only please");
  
  
  $("#order-form").validate({
    rules: {

      "your-name": {
        maxlength: 128,
        lettersonly: true,
      },

      "your-address": "required",

      "your-city" : "required",
      
      "your-state" : {
        required : true,
        minlength : 2,
      },
      
      "your-zip" : {
        required : true,
        minlength : 5,
        digits : true,
      },
      
      "card-holder-name" : {
        required : true,
        equalTo : "#your-name",
      },
      
      "card-number" : {
        required : true,
        digits : true,
        minlength : 16,
      },
      
      "expiry-month" : "required",
      "expiry-year"  : "required",
      
      "cvv" : {
        required : true,
        digits : true,
        minlength : 3,
      },
      
      "shipping-method" : "required",
      
      "comments" : {
        maxlength : 500, 
      }
    }
  });

})
$(document).ready(function () {

  let submitButton = $('#btnSubmit');
  let inputZone = $('form input:text');
  // $('<div></div>').append('body');
  $('form').after('<div></div>');

  $(submitButton).attr('disabled', true);

  $(inputZone).keyup(function () {
    if ($(this).val().length != 0)
      $(submitButton).attr('disabled', false);
    else
      $(submitButton).attr('disabled', true);
  })

  $('#btnSubmit').click(function () {
    $('<h2>You clicked the button.</h2>').appendTo('div');
  })


});




$(document).ready(function () {
  $('#hit_form input').click(function () {
    $.ajax({
      type: 'POST',
      url: '/player/hit',
      data: {param1: 'hi', param2: 'there'}
    }).done(function (msg) {
      $('#some_element').html(msg);
    });
  });
});

/*

notes:

- Rails magic essentially converts elements with data-remote 'true' attributes
  to the above using jQuery/JavaScript to implement ajax

*/

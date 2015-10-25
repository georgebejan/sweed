$( document ).ready(function()  {
  $("#video-controls").hide();
  $("#paused").hide();
  $('#confirm_send').hide();

  var mq = window.matchMedia( "(min-device-width: 850px)" );
  if (mq.matches) {
    $('#get_featured').on('click', function(e) {
      e.preventDefault();
      var target= $('#contact')
      $('html, body').stop().animate({
         scrollTop: target.offset().top
      }, 1000);
    });
    
    $('#play').on('click', function(e) {
        var target = $("#header_overlay");
        $("#header_overlay").hide();
        $("#video-controls").show();
        $("#paused").hide();
    });
  
    $('#stop').on('click', function(e) {
        var target = $("#header_overlay");
        $("#play").css('background-image', 'url(images/play_button.png)');
        $("#header_overlay").show();
        $("#video-controls").hide();
        $("#paused").hide();
    });
  
    $('#pause').on('click', function(e) {
        var target = $("#header_overlay");
        $("#play").css('background-image', 'url(images/play_button.png)');
        $("#paused").show();
        $("#header_overlay").show();    
        $("#video-controls").hide();
    });
  }

  $('#send_message').submit(function(event) {
      event.preventDefault();
      var $form = $( this ),
          url = $form.attr( 'action' );

      var posting = $.post( url, { 
        name: $('#name').val(), 
        email: $('#email').val(),
        subject: $('#subject').val(),
        message: $('#message').val() 
      });

      posting.done(function(data) {
        $('#confirm_send').show().delay(5000).fadeOut();
      });
  });
})
;

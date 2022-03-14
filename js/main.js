var $target = $('.wrapper');
inView('.section').on('enter', function(el){
  var color = $(el).attr('data-bg-enter');
  $target.css('background-color', color );
});
inView('.section').on('exit', function(el){
  var color = $(el).attr('data-bg-exit');
  $target.css('background-color', color );
});
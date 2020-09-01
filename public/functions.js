
$('.switch input').on('change', function(){
  var dad = $(this).parent();
  if($(this).is(':checked'))
    dad.addClass('switch-checked');
  else
    dad.removeClass('switch-checked');
});

$('.switch2 input').on('change', function(){
  var dad = $(this).parent();
  if($(this).is(':checked'))
    dad.addClass('switch2-checked');
  else
    dad.removeClass('switch2-checked');
});

$('.switch3 input').on('change', function(){
  var dad = $(this).parent();
  if($(this).is(':checked'))
    dad.addClass('switch3-checked');
  else
    dad.removeClass('switch3-checked');
});
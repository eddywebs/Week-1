$(function(){
  var oneUp = function(){
  	var num = $('#output').html();
    num++;

    $('#output').html(num);
  };
  var printNum = function(){
    var num = 0;
    $('#output').html(num);
  };
  printNum();
  $('#my-button').click(oneUp);
});
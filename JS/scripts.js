$(document).ready(function(){

  $(".cat").click(function() {
    $(".bark").toggleClass("wow");
  });

  $(".dog").click(function() {
    $(".meow").toggleClass("wow");
  });

});
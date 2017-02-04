$(function() {
  $(".revealer").click(function() {
    if (!$(".typed").hasClass("showing")) {
      $(".typed").typed({
        stringsElement: $('.typed-strings'),
        showCursor: false,
      });
      $(".typed").addClass("showing");
    }
  });
});

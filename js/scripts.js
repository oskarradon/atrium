$(function() {
  $(".revealer").click(function() {
    $(".typed").typed({
      stringsElement: $('.typed-strings'),
      showCursor: false,
    });
  });
});

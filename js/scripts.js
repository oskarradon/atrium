var img = document.getElementsByClassName('revealer')[0];

img.addEventListener("click", typeItOut);

// Show text
function typeItOut() {
  console.log("hi");
  $(function() {
    $(".typed").typed({
      stringsElement: $('.typed-strings'),
      showCursor: false,
    });
  });
}

var img = document.getElementsByClassName('revealer')[0];

img.addEventListener("click", growDiv);

function growDiv() {
  var growDiv = document.getElementById('grow');
  if (growDiv.clientHeight) {
    growDiv.style.height = 0;
  } else {
    var wrapper = document.querySelector('.measuringWrapper');
    growDiv.style.height = wrapper.clientHeight + "px";
  }
}

function placeTextDiv() {
  var growDiv = document.getElementById('grow');
  var rect = img.getBoundingClientRect();
  growDiv.style.top = rect.top + rect.height + 'px';
}

placeTextDiv();

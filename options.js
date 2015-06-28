document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("onbtn").addEventListener.("click", on);
  document.getElementById("offbtn").addEventListener.("click", off);
});

// The handler also must go in a .js file
function on() {
  	localStorage["status"] = "on";
}

function off(){
	localStorage["status"] = "off";
}
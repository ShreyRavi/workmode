//from Google Developer Extensions Options Tutorial
// Saves options to chrome.storage
function save_options() {
	var options = new Array(20);
	var i;
	for(i = 1; i <= options.length; i++){
		options[i-1] = document.getElementById('website'+i).value;
	}
  chrome.storage.sync.set({
    option: options,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved! Thank you.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    option: ["facebook.com/","twitter.com/","youtube.com/","reddit.com/","pinterest.com/","vimeo.com/","plus.google","tumblr.com/","instagram.com/","","","","","","","","","","",""]
  }, function(items) {
  	var x;
	for(x = 1; x <= 20; x++){
		document.getElementById('website'+x).value = items.option[x-1];
	}
  });
}

function reset(){
	var resetArray = ["facebook.com/","twitter.com/","youtube.com/","reddit.com/","pinterest.com/","vimeo.com/","plus.google","tumblr.com/","instagram.com/","","","","","","","","","","",""];
	var x;
	for(x = 1; x <= 20; x++){
		document.getElementById('website'+x).value = resetArray[x-1];
	}
}

document.addEventListener('DOMContentLoaded', restore_options);
var resetbtn = document.getElementById('reset');
if(resetbtn){
	resetbtn.addEventListener('click',reset);
}
var svbtn = document.getElementById('save');
if(svbtn){
  svbtn.addEventListener('click',
    save_options);
}

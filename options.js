//options.js - file to hold the logic of the options saving
//Shrey Ravi
//WorkMode 3 - Using Chrome Storage API + Custom URL Blocking

//TODO: Make the length of settings dynamic 
let resetArray = [
  "facebook.com/",
  "twitter.com/",
  "youtube.com/",
  "reddit.com/",
  "pinterest.com/",
  "vimeo.com/",
  "plus.google",
  "tumblr.com/",
  "instagram.com/",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

/**
 * Function that saves options to Chrome's localstorage
 */
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

/**
 * Restores select box and checkbox state using the preferences stored in chrome.storage.
 */
function restore_options() {
  chrome.storage.sync.get({
    option: resetArray
  }, function(items) {
  	var x;
	for(x = 1; x <= 20; x++){
		document.getElementById('website'+x).value = items.option[x-1];
	}
  });
}

/**
 * Resets the options input to a default start state
 */
function reset() {
	var x;
	for(x = 1; x <= 20; x++){
		document.getElementById('website'+x).value = resetArray[x-1];
	}
}

/**
 * Once page is loaded, load the localstorage options values
 */
document.addEventListener('DOMContentLoaded', restore_options);
var resetbtn = document.getElementById('reset');
if(resetbtn) {
	resetbtn.addEventListener('click',reset);
}

/**
 * If the save button is properly rendered, attach a listener to activate save logic
 */
var svbtn = document.getElementById('save');
if(svbtn) {
  svbtn.addEventListener('click',
    save_options);
}
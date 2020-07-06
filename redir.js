//redir.js
//Shrey Ravi
//WorkMode 3 - Using Chrome Storage API + Custom URL Blocking

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
 * Adds Chrome onUpdated listener that senses when to close tabs
 */
chrome.tabs.onUpdated.addListener(function(id, info, tab) {
    chrome.storage.sync.get(['activated'], function(items) {
        var bool = items.activated;
        if(bool.indexOf("true") > -1) {
            chrome.storage.sync.get({
            option: resetArray
            }, function(items) {
                var x;
                for(x = 1; x <= 20; x++) {
                        //case if option was empty, we can ignore it
                        if(items.option[x-1] === "") {
                            continue;
                        }

                        //case if URL is found in options, then remove!
                        if(tab.url.toLowerCase().indexOf(items.option[x-1]) !== -1){
                            chrome.tabs.remove(tab.id);
                        }
                    }
            });
            chrome.browserAction.setIcon({
                path: {
                    38: "iconon.png"
                },
                tabId: tab.id
            });
        }
        else {
            chrome.browserAction.setIcon({
                path: {
                    38: "icon.png"
                },
                tabId: tab.id
            });
        }  
    });
});

/**
 * Adds function that senses when to update extension state to call in listeners
 */
function updateIconState() {
    chrome.storage.sync.get(['activated'], function(items) {
        bool = items.activated;
        if(bool == null) {
            bool = "false";
        }
        if(bool.indexOf("true") > -1) {
            chrome.browserAction.setIcon({
                path: {
                    38: "iconon.png"
                },
            });
            activated = true;
            chrome.storage.sync.set({activated: "true",}, function() {});
        }
        else {
            chrome.browserAction.setIcon({
                path: {
                    38: "icon.png"
                },
            });
            chrome.storage.sync.set({activated: "false",}, function() {});
        }
    });
}

/**
 * Adds Chrome onClicked listener that senses when to update extension state
 * The key difference is this method has tabID: tab.id stored as well in the 
 * chrome.browserAction call
 */
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get(['activated'], function(items) {
        bool = items.activated;
        if(bool == null) {
            bool = "false";
        }
        if(bool.indexOf("true") > -1) {

            chrome.browserAction.setIcon({
                path: {
                    38: "icon.png"
                },
                tabId: tab.id
            });
            chrome.storage.sync.set({'activated': 'false'}, function() {});    
        }
        else {
            chrome.browserAction.setIcon({
                path: {
                    38: "iconon.png"
                },
                tabId: tab.id
            });
            activated = true;
            chrome.storage.sync.set({'activated': 'true'}, function() {});  
        }
    });
});

//NOTE: Added the below to ensure compatibility will all versions of Google Chrome and ensure proper function in all cases

/**
 * Adds Chrome onCreated listener that senses when to update extension state
 */
chrome.tabs.onCreated.addListener(function(tab){
    updateIconState();
});

/**
 * Adds Chrome onMoved listener that senses when to update extension state
 */
chrome.tabs.onMoved.addListener(function(id, info){
    updateIconState();
});

/**
 * Adds Chrome onActivated listener that senses when to update extension state
 */
chrome.tabs.onActivated.addListener(function(info){
    updateIconState();
});

/**
 * Adds Chrome onHighlighted listener that senses when to update extension state
 */
chrome.tabs.onHighlighted.addListener(function(info){
    updateIconState();
});

/**
 * Adds Chrome onDetached listener that senses when to update extension state
 */
chrome.tabs.onDetached.addListener(function(id){
    updateIconState();
});

/**
 * Adds Chrome onAttached listener that senses when to update extension state
 */
chrome.tabs.onAttached.addListener(function(id, info){
    updateIconState();
});

/**
 * Adds Chrome onRemoved listener that senses when to update extension state
 */
chrome.tabs.onRemoved.addListener(function(id, info){
    updateIconState();
});

/**
 * Adds Chrome onReplaced listener that senses when to update extension state
 */
chrome.tabs.onReplaced.addListener(function(id, removedId){
    updateIconState();
});

/**
 * Adds Chrome onZoomChange listener that senses when to update extension state
 */
chrome.tabs.onZoomChange.addListener(function(info){
    updateIconState();
});

/**
 * Adds Chrome onCreated listener that senses when to update extension state
 */
chrome.tabs.onCreated.addListener(function(id, info, tab){
    updateIconState();
});
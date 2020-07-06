//redir.js
//Shrey Ravi
//WorkMode 3 - Using Chrome Storage API + Custom URL Blocking

//TODO: Make the length of settings dynamic
//TODO: Refactor code to combine repeated code blocks

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
 * Adds Chrome onUpdated listener that sense when to close the tab
 */
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    chrome.storage.sync.get(['activated'], function(items) {
    var bool = items.activated;
    if(bool.indexOf("true") > -1){
        chrome.storage.sync.get({
        option: resetArray
        }, function(items) {
        var x;
        for(x = 1; x <= 20; x++){
                if(items.option[x-1] === ""){continue;}
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
    else{
        chrome.browserAction.setIcon({
            path: {
                38: "icon.png"
            },
        tabId: tab.id
        });
    }  });
});

/**
 * Adds Chrome onClicked listener that sense when to close the tab
 */
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get(['activated'], function(items) {
    bool = items.activated;
    if(bool == null){
        bool = "false";
    }
    if(bool.indexOf("true") > -1){

        chrome.browserAction.setIcon({
            path: {
                38: "icon.png"
            },
        tabId: tab.id
        });
        chrome.storage.sync.set({'activated': 'false'}, function() {});    
    }
    else{
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

/**
 * Adds Chrome onCreated listener that sense when to close the tab
 */
chrome.tabs.onCreated.addListener(function(tab){
    chrome.storage.sync.get(['activated'], function(items) {
    bool = items.activated;
    if(bool == null){
        bool = "false";
    }
    if(bool.indexOf("true") > -1){
        chrome.browserAction.setIcon({
            path: {
                38: "iconon.png"
            },
            //tabId: tab.id
        });
        activated = true;
        chrome.storage.sync.set({activated: "true",}, function() {});
    }
    else{
        chrome.browserAction.setIcon({
            path: {
                38: "icon.png"
            },
        //tabId: tab.id
        });
        chrome.storage.sync.set({activated: "false",}, function() {});
    }
    });
});

/**
 * Adds Chrome onMoved listener that sense when to close the tab
 */
chrome.tabs.onMoved.addListener(function(id, info){
    chrome.storage.sync.get(['activated'], function(items) {
    bool = items.activated;
    if(bool == null){
        bool = "false";
    }
    if(bool.indexOf("true") > -1){
        chrome.browserAction.setIcon({
            path: {
                38: "iconon.png"
            },
            //tabId: tab.id
        });
        activated = true;
        chrome.storage.sync.set({activated: "true",}, function() {});
    }
    else{
        chrome.browserAction.setIcon({
            path: {
                38: "icon.png"
            },
        //tabId: tab.id
        });
        chrome.storage.sync.set({activated: "false",}, function() {});
    }
    });
});

/**
 * Adds Chrome onActivated listener that sense when to close the tab
 */
chrome.tabs.onActivated.addListener(function(info){
    chrome.storage.sync.get(['activated'], function(items) {
    bool = items.activated;
    if(bool == null){
        bool = "false";
    }
    if(bool.indexOf("true") > -1){
        chrome.browserAction.setIcon({
            path: {
                38: "iconon.png"
            },
            //tabId: tab.id
        });
        activated = true;
        chrome.storage.sync.set({activated: "true",}, function() {});
    }
    else{
        chrome.browserAction.setIcon({
            path: {
                38: "icon.png"
            },
        //tabId: tab.id
        });
        chrome.storage.sync.set({activated: "false",}, function() {});
    }
    });
});

/**
 * Adds Chrome onHighlighted listener that sense when to close the tab
 */
chrome.tabs.onHighlighted.addListener(function(info){
    chrome.storage.sync.get(['activated'], function(items) {
    bool = items.activated;
    if(bool == null){
        bool = "false";
    }
    if(bool.indexOf("true") > -1){
        chrome.browserAction.setIcon({
            path: {
                38: "iconon.png"
            },
            //tabId: tab.id
        });
        activated = true;
        chrome.storage.sync.set({activated: "true",}, function() {});
    }
    else{
        chrome.browserAction.setIcon({
            path: {
                38: "icon.png"
            },
        //tabId: tab.id
        });
        chrome.storage.sync.set({activated: "false",}, function() {});
    }
    });
});

/**
 * Adds Chrome onDetached listener that sense when to close the tab
 */
chrome.tabs.onDetached.addListener(function(id){
    chrome.storage.sync.get(['activated'], function(items) {
    bool = items.activated;
    if(bool == null){
        bool = "false";
    }
    if(bool.indexOf("true") > -1){
        chrome.browserAction.setIcon({
            path: {
                38: "iconon.png"
            },
            //tabId: tab.id
        });
        activated = true;
        chrome.storage.sync.set({activated: "true",}, function() {});
    }
    else{
        chrome.browserAction.setIcon({
            path: {
                38: "icon.png"
            },
        //tabId: tab.id
        });
        chrome.storage.sync.set({activated: "false",}, function() {});
    }
    });
});

/**
 * Adds Chrome onAttached listener that sense when to close the tab
 */
chrome.tabs.onAttached.addListener(function(id, info){
    chrome.storage.sync.get(['activated'], function(items) {
    bool = items.activated;
    if(bool == null){
        bool = "false";
    }
    if(bool.indexOf("true") > -1){
        chrome.browserAction.setIcon({
            path: {
                38: "iconon.png"
            },
            //tabId: tab.id
        });
        activated = true;
        chrome.storage.sync.set({activated: "true",}, function() {});
    }
    else{
        chrome.browserAction.setIcon({
            path: {
                38: "icon.png"
            },
        //tabId: tab.id
        });
        chrome.storage.sync.set({activated: "false",}, function() {});
    }
    });
});

/**
 * Adds Chrome onRemoved listener that sense when to close the tab
 */
chrome.tabs.onRemoved.addListener(function(id, info){
    chrome.storage.sync.get(['activated'], function(items) {
    bool = items.activated;
    if(bool == null){
        bool = "false";
    }
    if(bool.indexOf("true") > -1){
        chrome.browserAction.setIcon({
            path: {
                38: "iconon.png"
            },
            //tabId: tab.id
        });
        activated = true;
        chrome.storage.sync.set({activated: "true",}, function() {});
    }
    else{
        chrome.browserAction.setIcon({
            path: {
                38: "icon.png"
            },
        //tabId: tab.id
        });
        chrome.storage.sync.set({activated: "false",}, function() {});
    }
    });
});

/**
 * Adds Chrome onReplaced listener that sense when to close the tab
 */
chrome.tabs.onReplaced.addListener(function(id, removedId){
    chrome.storage.sync.get(['activated'], function(items) {
    bool = items.activated;
    if(bool == null){
        bool = "false";
    }
    if(bool.indexOf("true") > -1){
        chrome.browserAction.setIcon({
            path: {
                38: "iconon.png"
            },
            //tabId: tab.id
        });
        activated = true;
        chrome.storage.sync.set({activated: "true",}, function() {});
    }
    else{
        chrome.browserAction.setIcon({
            path: {
                38: "icon.png"
            },
        //tabId: tab.id
        });
        chrome.storage.sync.set({activated: "false",}, function() {});
    }
    });
});

/**
 * Adds Chrome onZoomChange listener that sense when to close the tab
 */
chrome.tabs.onZoomChange.addListener(function(info){
    chrome.storage.sync.get(['activated'], function(items) {
    bool = items.activated;
    if(bool == null){
        bool = "false";
    }
    if(bool.indexOf("true") > -1){
        chrome.browserAction.setIcon({
            path: {
                38: "iconon.png"
            },
            //tabId: tab.id
        });
        activated = true;
        chrome.storage.sync.set({activated: "true",}, function() {});
    }
    else{
        chrome.browserAction.setIcon({
            path: {
                38: "icon.png"
            },
        //tabId: tab.id
        });
        chrome.storage.sync.set({activated: "false",}, function() {});
    }
    });
});

/**
 * Adds Chrome onCreated listener that sense when to close the tab
 */
chrome.tabs.onCreated.addListener(function(id, info, tab){
    chrome.storage.sync.get(['activated'], function(items) {
    bool = items.activated;
    if(bool == null){
        bool = "false";
    }
    if(bool.indexOf("true") > -1){
        chrome.browserAction.setIcon({
            path: {
                38: "iconon.png"
            },
            //tabId: tab.id
        });
        activated = true;
        chrome.storage.sync.set({activated: "true",}, function() {});
    }
    else{
        chrome.browserAction.setIcon({
            path: {
                38: "icon.png"
            },
        //tabId: tab.id
        });
        chrome.storage.sync.set({activated: "false",}, function() {});
    }
    });
});
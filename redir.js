//redir.js
//Shrey Ravi
//WorkMode 3 - Using Chrome Storage API + Custom URL Blocking

//onupdated
chrome.tabs.onUpdated.addListener(function(id, info, tab){
    chrome.storage.sync.get(['activated'], function(items) {
    var bool = items.activated;
    if(bool.indexOf("true") > -1){
        chrome.storage.sync.get({
        option: ["facebook.com/","twitter.com/","youtube.com/","reddit.com/","pinterest.com/","vimeo.com/","plus.google","tumblr.com/","instagram.com/","","","","","","","","","","",""]
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

//onclicked
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

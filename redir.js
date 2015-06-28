var redir = "http://sd.keepcalm-o-matic.co.uk/i/don-t-waste-your-time-or-time-will-waste-you-2.png";
localStorage["activated"] = "false";

chrome.tabs.onUpdated.addListener(function(id, info, tab){
    var bool = localStorage["activated"];
    if(bool.indexOf("true") > -1){
        //fb
        if (tab.url.toLowerCase().indexOf("facebook.com/") !== -1){
            chrome.tabs.update(tab.id, {url: redir});
        }
        //tw
        if (tab.url.toLowerCase().indexOf("twitter.com/") !== -1){
            chrome.tabs.update(tab.id, {url: redir});
        }
        //yt
        if (tab.url.toLowerCase().indexOf("youtube.com/") !== -1){
            chrome.tabs.update(tab.id, {url: redir});
        }
        //xxx
        if (tab.url.toLowerCase().indexOf("porn") !== -1){
            chrome.tabs.update(tab.id, {url: redir});
        }
        if (tab.url.toLowerCase().indexOf("sex") !== -1){
            chrome.tabs.update(tab.id, {url: redir});
        }
        //re
        if (tab.url.toLowerCase().indexOf("reddit.com/") !== -1){
            chrome.tabs.update(tab.id, {url: redir});
        }
        //pi
        if (tab.url.toLowerCase().indexOf("pinterest.com/") !== -1){
            chrome.tabs.update(tab.id, {url: redir});
        }
        //vm
        if (tab.url.toLowerCase().indexOf("vimeo.com/") !== -1){
            chrome.tabs.update(tab.id, {url: redir});
        }
        //gp
        if (tab.url.toLowerCase().indexOf("plus.google") !== -1){
            chrome.tabs.update(tab.id, {url: redir});
        }
        //tm
        if (tab.url.toLowerCase().indexOf("tumblr.com/") !== -1){
            chrome.tabs.update(tab.id, {url: redir});
        }

        chrome.browserAction.setIcon({
            path: {
                //19: "iconon19.png",
                38: "iconon.png"
            },
            tabId: tab.id
        });

    }

    else{
        chrome.browserAction.setIcon({
            path: {
                //19: "icon19.png",
                38: "icon.png"
            },
        tabId: tab.id
        });
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    var bool = localStorage["activated"];
    if(bool.indexOf("false") > -1){
        chrome.browserAction.setIcon({
            path: {
                //19: "iconon19.png",
                38: "iconon.png"
            },
            tabId: tab.id
        });
        activated = true;
        localStorage["activated"] = "true";
    }
    else{
        chrome.browserAction.setIcon({
            path: {
                //19: "icon19.png",
                38: "icon.png"
            },
        tabId: tab.id
        });
        localStorage["activated"] = "false";
    }
});
localStorage["activated"] = "false";

chrome.tabs.onUpdated.addListener(function(id, info, tab){

    var bool = localStorage["activated"];
    var redir = "http://www.workmode.org";
    if (tab.url.toLowerCase().indexOf("work mode") !== -1){
    	chrome.tabs.update(tab.id, {url: redir});
    }
    if(bool.indexOf("true") > -1){
        //fb
        if (tab.url.toLowerCase().indexOf("facebook.com/") !== -1){
            chrome.tabs.remove(tab.id);
        }
        //tw
        if (tab.url.toLowerCase().indexOf("twitter.com/") !== -1){
            chrome.tabs.remove(tab.id);
        }
        //yt
        if (tab.url.toLowerCase().indexOf("youtube.com/") !== -1){
            chrome.tabs.remove(tab.id);
        }
        //re
        if (tab.url.toLowerCase().indexOf("reddit.com/") !== -1){
            chrome.tabs.remove(tab.id);
        }
        //pi
        if (tab.url.toLowerCase().indexOf("pinterest.com/") !== -1){
            chrome.tabs.remove(tab.id);
        }
        //vm
        if (tab.url.toLowerCase().indexOf("vimeo.com/") !== -1){
            chrome.tabs.remove(tab.id);
        }
        //gp
        if (tab.url.toLowerCase().indexOf("plus.google") !== -1){
            chrome.tabs.remove(tab.id);
        }
        //tm
        if (tab.url.toLowerCase().indexOf("tumblr.com/") !== -1){
        	chrome.tabs.remove(tab.id);
            //chrome.tabs.update(tab.id, {url: redir});
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
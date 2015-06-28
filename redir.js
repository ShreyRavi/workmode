var redir = "http://sd.keepcalm-o-matic.co.uk/i/don-t-waste-your-time-or-time-will-waste-you-2.png";
localStorage["activated"] = "false";

chrome.tabs.onUpdated.addListener(function(id, info, tab){
    var bool = localStorage["activated"];
    if(bool.indexOf("true") > -1){
        if (tab.url.toLowerCase().indexOf("facebook.com/") !== -1){
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
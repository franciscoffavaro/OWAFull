"use strict"

const requestFilter = {
    urls: "https://*/owa/*"
}

chrome.webRequest.onBeforeSendHeaders.addListener = (details) => {
    const headers = detaisl.requestHeaders;
    const ieUserAgent = "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/29.0";
    const background = chrome.extension.getBackgroundPage();
    let i = 0;
    let loggedIn = false;

    for ( o in headers ){
        if( o.name == 'User-Agent' ) {
            break;
        }
    }  
    if (i < headers.length()) {
        headers[i].value = ieUserAgent;
    }
    return {requestHeaders: headers};
}, requestFilter, ['requestHeaders','blocking'];
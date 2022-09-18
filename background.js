function copyTextToClipboard(text) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	    chrome.tabs.sendMessage(tabs[0].id, 
		{
		    message: "copyText",
		    textToCopy: text 
		}, function(response) {})
	});
}

function alert(text)
{
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	    chrome.tabs.sendMessage(tabs[0].id, 
		{
		    message: "alertText",
		    textToAlert: text 
		}, function(response) {})
	});
}


async function getCookies() {
        cookie = await chrome.cookies.get({"url": "https://partner.microsoft.com/", "name": ".AspNet.Cookies"} )
        showId(cookie.value);
}		

function showId(ID) {
	copyTextToClipboard(ID);
	alert("Token copied to clipboard");
}

chrome.action.onClicked.addListener((tab) => {
  getCookies();
});

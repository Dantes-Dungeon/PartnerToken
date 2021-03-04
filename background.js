// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	var decodeHTML = function (html) {
		var txt = document.createElement('textarea');
		txt.innerHTML = html;
		return txt.value;
	};
	var ID;
	
	function copyToClipboard(text) {
		var dummy = document.createElement("textarea");
		// to avoid breaking orgain page when copying more words
		// cant copy when adding below this code
		// dummy.style.display = 'none'
		document.body.appendChild(dummy);
		//Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
		dummy.value = text;
		dummy.select();
		document.execCommand("copy");
		document.body.removeChild(dummy);
	}

    function getCookies(domain, name) 
    {
        chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
            ID = cookie.value;
            showId();
        });
    }
		
    function showId() {
		copyToClipboard(ID);
        alert("Token copied to clipboard");
    }
    getCookies("https://partner.microsoft.com/", ".AspNet.Cookies")        
});
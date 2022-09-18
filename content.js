chrome.runtime.onMessage.addListener( // this is the message listener
    function(request, sender, sendResponse) {
        if (request.message === "copyText")
            copyToTheClipboard(request.textToCopy);
        else if (request.message === "alertText")
            alert(request.textToAlert);
    }
);

async function copyToTheClipboard(textToCopy){
    const el = document.createElement('textarea');
    el.value = textToCopy;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}


var iframe = document.createElement('iframe');

iframe.src = chrome.extension.getURL('search.html');

iframe.setAttribute('frameborder', 0);
iframe.setAttribute('scolling', 'none');
iframe.setAttribute('allowtransparency', true);
iframe.style = 'width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999999999;';

document.body.appendChild(iframe);

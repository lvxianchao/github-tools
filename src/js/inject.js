(function () {
    var id = 'kkjofhv-github-tools';
    var kkjofhv = document.getElementById(id);

    // 注入搜索页面
    if (!kkjofhv) {
        var iframe = document.createElement('iframe');

        iframe.id = 'kkjofhv-github-tools';
        iframe.src = chrome.extension.getURL('search.html');

        iframe.setAttribute('frameborder', 0);
        iframe.setAttribute('scolling', 'none');
        iframe.setAttribute('allowtransparency', true);
        iframe.style = 'width:100%; height:100%; position:fixed; top:0; left:0; z-index:9999999999;';

        document.body.appendChild(iframe);
        kkjofhv = document.getElementById(id);

    }
    
    // 取消搜索页面
    window.onmessage = function (e) {
        if (e.origin == kkjofhv.src) return;

        if (e.data == 'esc') {
            kkjofhv.parentNode.removeChild(kkjofhv);
        }
    }

})();
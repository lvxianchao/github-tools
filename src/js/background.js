// 后台脚本，监听键盘事件
chrome.commands.onCommand.addListener(function (command) {
    // 监听到启动快速搜索，向页面注入临时脚本，引入搜索页面。
    if (command === 'quick-search') {
        search();
    }
});

function search() {
    chrome.tabs.executeScript(null, {
        file: "js/inject.js",
        matchAboutBlank: true,
        runAt: "document_start",
        allFrames: true
    });
}


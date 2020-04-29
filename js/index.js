//这种js的写法是属于对象写法，和你在视频初学看到的不一样，这个写法结构更便于初学者的维护
let initPage ={
    testIframe: function () {
        let showIframe = document.getElementById('show-iframe');
        document.getElementById('toTestIframe').addEventListener("click", function () {
            let num = getRndInteger(1, 100);
            showIframe.contentWindow.postMessage(num);
        });
        //父类获取
        window.addEventListener('message', function (event) {
            switch (event.data) {
                case 'menu':
                    //迷宫游戏iframe
                    $('#identifier').modal();
                    break;
                default:
                    //test的iframe执行
                    document.getElementById('fatherCtn').innerText = event.data;
            }
        });
        //调用iframe子页面中的方法
        document.getElementById('toReturnIframe').onclick = function () {
            showIframe.contentWindow.toReturnCtn();
        };
    }
};

window.onload = () => {
    //测试iframe
    initPage.testIframe();
};

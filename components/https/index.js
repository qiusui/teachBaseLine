let init = {
    testLol: function () {
        //封装cookie  创建一个函数用于存储访问者的名字
        function setCookie(cname, cvalue, exdays) {
            //cookie 的名称为 cname，cookie 的值为 cvalue，并设置了 cookie 的过期时间 expires
            let d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = 'expires' + d.toGMTString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }

        //获取 cookie 值的函数
        function getCookie(cname) {
            let name = cname + '=';
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i].trim();
                if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
            }
            return '';
        }

        //检测cookie是否创建s
        function checkCookie() {
            let user = getCookie('username');
            if (user !== '') {
                document.getElementById('getCookie').innerText = '用户名：' + user;
            } else {
                user = prompt("请输入你的名字:", "");
                if (user !== "" && user !== null) {
                    setCookie("username", user, 30);
                }
            }
        }

        checkCookie();
    },
    testSession: function () {
        //直接判断是否有点击
        window.localStorage.setItem('girl:', '大桥未久');
        if (window.sessionStorage.clickcount) {
            document.getElementById("result").innerHTML = "你在按钮上已经点击了 " + sessionStorage.clickcount + " 次。";
        }
        document.getElementById('sessionClick').onclick = function () {
            if (typeof Storage !== 'undefined') {
                if (sessionStorage.clickcount) {
                    sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
                } else {
                    sessionStorage.clickcount = 1;
                }
                document.getElementById("result").innerHTML = "你在按钮上已经点击了 " + sessionStorage.clickcount + " 次。";
            } else {
                document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
            }
        };
    }
};

window.onload = function () {
    //测试cookie缓存情况
    init.testLol();
    //测试sessionStorage
    init.testSession();
};

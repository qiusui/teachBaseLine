/*
该js用于各种公共方法的执行以及返回
*/
//判断是否是邮箱
function isEmail() {
    let reg = /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/;
    let result = reg.test(emailStr);
    if (result) {
        alert("ok");
    } else {
        alert("error");
    }
}

//判断是否是正确的手机格式
function isMobilePhone() {
    let reg = /^1\d{10}$/;
    if (reg.test(phone)) {
        alert('ok');
    } else {
        alert('error');
    }
}

// //以下函数返回 min（包含）～ max（包含）之间的数字：
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*
* 测试递归函数
* 递归：简单来说，递归函数就是在函数中调用自己
* 例如这就是一个非常简单的递归
let i = 1;
function f() {
    i ++;
    if (i < 5) {
        f();
    }
    console.log('从前有座山，山里有个庙，庙里有个老和尚给小和尚讲故事')
}
* 这个方法是计算任何数字的阶乘
* 5! = 5×4×3×2×1 = 120
* */
function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        return  n * factorial(n - 1);
    }
}

//测试闭包封装
let testBibao;
(function () {
    testBibao = {
        //判断是否是一个数组
        isArray: function (arr) {
            console.log(arr);
            return Object.prototype.toString.call(arr) ==='[object Array]';
        }
    }
})();

//调用ajax
//这里写一个元素js的ajax方法，注意，这个到时候写到js里面去作为一个学习内容
//对于js原生的请求，我这里叫做五步走请求
//https://www.cnblogs.com/yangheng/p/6065910.html  这个到时候可以作为参考
function ajax(options) {
    let xmlhttp;
    let ajaxCtn = '';
    //1、创建对象(创建ajax对象)
    if (window.XMLHttpRequest) {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    } else {
        // IE6, IE5 浏览器执行代码
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //2、绑定监听函数
    xmlhttp.onreadystatechange = function () {
        //如果请求成功，进行处理
        /*
        * xmlhttp.readyState之所以是等于4，是因为相应0-4的变化
        * 0: 请求未初始化
        * 1: 服务器连接已建立
        * 2: 请求已接收
        * 3: 请求处理中
        * 4: 请求已完成，且响应已就绪
        * */
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status >= 200 && xmlhttp.status < 300) {
                options.success && options.success(xmlhttp.responseText, xmlhttp.responseXML);
            } else {
                options.fail && options.fail(xmlhttp.status);
            }
        }
    };
    //3、处理请求地址
    if (options.type === 'get' || options.type === 'GET') {
        xmlhttp.open(options.type, options.url);
        xmlhttp.send();
    } else if (options.type === 'post' || options.type === 'POST') {
        //4.设置请求头：这里get不需要，post需要
        xmlhttp.open(options.type, options.url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send();
    }
    return ajaxCtn
}



//隐藏小说
let book = function () {
    let flage = false;
    document.getElementById('myModal').addEventListener('click', clickCtn);

    function clickCtn() {
        if (!flage) {
            document.getElementById('bookTake').setAttribute('style', 'display: block')
        } else {
            document.getElementById('bookTake').setAttribute('style', 'display: none')
        }
        flage = !flage;
    }
};

//测试es6的set方法
let init = function () {

};

//测试es6中promise对象
let testPromise = function () {
    function timeout(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, '异步结束')
        })
    }

    timeout(3000).then(value => {
        document.getElementById('testPromise').innerText = '3秒后得到内容：' + value
    })
};

//测试异步实现ajax：原生ajax的请求步骤
let getJSON = function (url) {
    const promise = new Promise((resolve, reject) => {
        //监听函数
        //这里注意this的指向
        const hander = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText));
            }
        };

        //1、创建对象(创建ajax对象)
        const client = new XMLHttpRequest();
        //2、处理发送方式
        client.open('GET', url);
        //3、设置监听函数
        client.onreadystatechange = hander;
        //4、设置请求头和请求类型
        client.responseType = 'text';
        client.setRequestHeader('Accept', 'application/text');
        client.send();
    });
    return promise;
};

//测试promise
//console都注释掉了，免得影响
let testPromise2 = function () {
    const p1 = new Promise(function (resolve, reject) {
        //console.log('这里是p1');
        resolve();
    });

    const p2 = new Promise(function (resolve, reject) {
        //console.log('这里是p2');
        resolve(p1);
    });

    p2.then(() => {
        //console.log('这里是p2已经执行返回了')
    })
};

//测试class的情况
class Point {
    constructor() {
        this.x  = 6;
        this.y = 60;
    }
}

class ColorPoint extends Point {
    constructor(x, y) {
        super(x, y)
    }

    toString() {
        console.log(this.x);
    }
}
let ax = new ColorPoint();
ax.toString();


window.onload = function () {
    //书本方法
    this.book();

    //测试es6的set方法
    this.init();
    //测试es6中promise对象
    this.testPromise();
    //测试es6中promise模拟对象
    this.getJSON('./eluosi.text').then(function (ctn) {
        document.getElementById('bookTake').innerText = ctn;
    }, function (error) {
        console.error('出错了', error);
    });
    //测试promise中resolve其他promise的情况
    this.testPromise2();
};

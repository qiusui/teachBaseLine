//立即执行函数：后面附带()表示对这个匿名函数的立即调用
(function () {
    console.log('sadfasdf');
})();

(function (ax) {
    console.log(ax);
})(999);

//不同2：变量提升：JavaScript引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行的运行，这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升
//类似于var可以先上床，再结婚
// console.log(bx);    //undeifnd
// var bx = 6;
//
// console.log(cx);    //报错
// let cx = 6;

var zz;
console.log(zz);

let zc;
console.log(zc);



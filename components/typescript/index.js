function sayHello(preson) {
    return 'hello,' + preson;
}
var user = 'Tome';
console.log(sayHello(user));
//通过具体方式定义，定义布尔类型
var isDone = false;
//定义字符串
var myName = 'Tom';
var myAge = 25;
//模板字符串 ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式
//具体的方式和es6的非常接近
var sentence = "Hello, my name is " + myName + " age is " + myAge;
//空值
//JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function consoleName() {
    console.log('这里void空值不做任何返回，没有任何返回值的函数');
}
//任意值
//在ts中，如果定义了具体的类型是无法改变的，但是定义any任意值，是可以像js一样继续随意修改
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
//这里的任意值，是可以进行随意获取里面的方法
var anyThing = 'hello';
console.log(anyThing);
//如果创建一个数据，没有指定类型，那么默认为任意值，而且之后也会被认为是默认值
var someThing;
someThing = 'string';
someThing = 7;
//而且，在ts中，如果对其进行赋值，就会被默认为这种类型
var someThing1 = 'string'; //默认为 let someThing1: string = 'string'这种写法
//联合类型
//这里通过 | 允许myFavoriteNumber1作为string或者number类型的一种，但是不能是其他类型
//此外，这里会根据你现有的类型做出相应的数据判断
var myFavoriteNumber1;
myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;
var tom = {
    name: 'Tom',
    age: 25
};
var tom2 = {
    name: 'tim2'
};
var tom3 = {
    name: 'tom3',
    age: 99
};
var tom4 = {
    name: 'Tom',
    age: 4,
    gender: 'male',
    takeCtn: 'takeCtn' //string
};
var tom5 = {
    name: 'Tom',
    age: 4,
    gender: 'male',
    takeCtn: 'takeCtn' //string
};
console.log(tom5);

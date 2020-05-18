function sayHello(preson: string) {  //: 指定 person 参数类型为 string
    return 'hello,' + preson;
}

let user = 'Tome';
console.log(sayHello(user));

//通过具体方式定义，定义布尔类型
let isDone: boolean = false;

//定义字符串
let myName: string = 'Tom';
let myAge: number = 25;

//模板字符串 ` 用来定义 ES6 中的模板字符串，${expr} 用来在模板字符串中嵌入表达式
//具体的方式和es6的非常接近
let sentence: string = `Hello, my name is ${myName} age is ${myAge}`;


//空值
//JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function consoleName(): void {
    console.log('这里void空值不做任何返回，没有任何返回值的函数');
}

//任意值
//在ts中，如果定义了具体的类型是无法改变的，但是定义any任意值，是可以像js一样继续随意修改
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

//这里的任意值，是可以进行随意获取里面的方法
let anyThing: any = 'hello';
console.log(anyThing);

//如果创建一个数据，没有指定类型，那么默认为任意值，而且之后也会被认为是默认值
let someThing;
someThing = 'string';
someThing = 7;

//而且，在ts中，如果对其进行赋值，就会被默认为这种类型
let someThing1 = 'string';      //默认为 let someThing1: string = 'string'这种写法


//联合类型
//这里通过 | 允许myFavoriteNumber1作为string或者number类型的一种，但是不能是其他类型
//此外，这里会根据你现有的类型做出相应的数据判断
let myFavoriteNumber1: string | number;
myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;


//接口定义interface
/*
* 我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。
* 这样，我们就约束了 tom 的形状必须和接口 Person 一致。
* 赋值的时候，变量的形状必须和接口的形状保持一致
* 也是就说tom和Person必须数量和类型一致（简单来记：保质保量）
* */
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};

//可选属性，这样就不用完全匹配
/*
* 这种情况下，是可以少，但是不能多
* */
interface TakeCtn {
    name: string;
    age?: number;       //?表示可以没有当前这个
}

let tom2 : TakeCtn = {
    name: 'tim2'
};

let tom3 : TakeCtn = {
    name: 'tom3',
    age: 99
};


/*
* 任意属性：
*接口允许有任意的属性：[]
* 使用 [propName: string] 定义了任意属性取 string 类型的值。
* 但是使用了这个之后，tom4就必须都是他的子集，也就是说tom4新加的必须中必须都是string类型
*
* */
interface TakeCtn1 {
    name: string;
    age?: number;
    [propName: string]: any;
}
let tom4: TakeCtn1 = {
    name: 'Tom',
    age: 4,
    gender: 'male',         //string
    takeCtn: 'takeCtn'      //string
};


/*
* 联合属性：
* 允许在自定义属性中加入多种情况
* */
interface TakeCtn2 {
    readonly id: number;        //readonly为只读属性，在id第一次被赋值之后，就只能获取，不能修改
    name: string;
    age?: number;
    [propName: string]: string | number;
}
let tom5: TakeCtn2 = {
    id: 888,                    //这里id被设置为888之后，由于只读属性，无法被修改
    name: 'Tom',
    age: 4,
    gender: 'male',         //string
    takeCtn: 'takeCtn'      //string
};



/*
* 数据类型：
*「类型 + 方括号」表示法      //最简答的方式
* */
let fibonacci: number[] = [1, 1, 2, 3, 5];

//使用接口表示数组
interface NumberArray {
    [index: number]: number
}
let fibCtn: NumberArray = [1,2,2,2,2,2];



/*
* 函数
* 函数是javascript中的一等公民
* */
// 函数声明（Function Declaration）
//一个函数有输入和输出，
// 要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：
function sum(x: number, y: number) : number {       //后面的number表示输出的为number类型
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};

//对函数表达式进行定义，需要给函数以及对应获取的都要执行到定义，所以
let mySum1: (x: number, y: number) => number = function (x: number, y: number) : number {
    return x + y;
};
//注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>，这两个不一样
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
// (输入类型) => (输出类型)

//使用接口的方式来定义一个函数需要符合的形状
interface SearchaFunc {
    (source: string, subString: string) : boolean       //输入string，输出boolean
}
let mySearch : SearchaFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
};















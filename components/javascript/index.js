//高阶函数
class Index {
    constructor() {

    }

    //map的使用测试：平方
    mapTest(array) {
        return array.map((ctn) => {
            return ctn * ctn
        })
    }

    //reduce的使用：用于叠加
    reduceTest(array) {
        return array.reduce((x, y) => {
            return x + y;
        })
    }

    //filter测试：过滤偶数
    filterTest(array) {
        return array.filter((ctn, index, arr) => {
            return ctn % 2 !== 0;
        })
    }

    //sort：测试sort方法
    sortTest(array) {
        return array.sort((x, y) => {
            if (x < y) {
                return 1;
            } else if (x > y) {
                return -1      //可以这样去记：-1是往前扔，0中间，1向后扔
            } else {
                return 0
            }
        });
    }

    //递归：简单的阶乘
    Factorial(num) {
        if (num === 1) {
            return num
        } else {
            return num * this.Factorial(num - 1);
        }
    }

    //测试一个递归的案例，求斐波那契数列第n项的总和
    //首先斐波那契数列是1,1,2,3,5,8,13,21…   即第n项是前两项的和
    //这里需要求第n项到前面的总和
    //先确定第n项的值
    checkN(n) {
        if (n === 1 || n === 2) {
            return 1
        } else {
            return this.checkN(n - 1) + this.checkN(n - 2);
        }
    }

    //知道第n项后，求第n项外加之前的值
    sunCtn(n) {
        if (n === 1) {
            return n
        } else {
            return this.checkN(n) + this.sunCtn(n - 1);
        }
    }
}

let init = {
    //testAjax
    testAjax: function () {
        ajax({
            url: './ctn.txt',
            type: 'get',
            success: function (response, xml) {
                document.getElementById('getCtn').innerText = response
            },
            fail: function (status) {
            }
        });
    },

    //高阶函数
    IndexTest: function () {
        let ax = new Array();
        for (let i = 1; i < 11; i++) {
            ax.push(i)
        }
        let takeCtn = new Index();
        //map
        $('.mapCtnTest').text('测试数据：' + ax);
        document.getElementById('mapCtn').innerText = `map得出结果：${(takeCtn.mapTest(ax)).map(String)}`;   //map用于数组转字符串也非常方便
        //reduce
        $('#reduceCtn').text('reduce结果' + takeCtn.reduceTest(ax));
        //filter
        $('#filterCtn').text('reduce结果' + takeCtn.filterTest(ax).map(String));
        //测试sort
        $('#sortCtn').text(takeCtn.sortTest(ax).map(String));
    },

    //递归
    recursion: function () {
        let takeCtn = new Index();
        $('#FactorialTest').text(takeCtn.Factorial(5));
        $('#FibonoTest').text('斐波那契数列的第10项：' + takeCtn.sunCtn(10));
    },

    //闭包
    bibao: function () {
        //一个非常简单的闭包函数
        let getCtn = function () {
            let count = 0;
            let get = function () {
                count++;
                return count;
            };
            return get;
        };
        let counter1 = getCtn();
        let counter2 = getCtn();
        $('#bibao').text(counter1() + '  ' + counter2());
    },

    //闭包测试1
    bibaoTest1: function () {

    }
};

window.onload = function () {
    //testAjax
    init.testAjax();
    //高阶函数
    init.IndexTest();
    //递归
    init.recursion();
    //闭包
    init.bibao();
    init.bibaoTest1();
};

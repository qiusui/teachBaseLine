//队列        这里用的是es6class方式哦，这个在react中是使用对多最广泛的es6设置
//其实对于class，我的理解就是，可以作为一个函数使用的呢
class Queue {
    //下面方法包括了队列的思想
    constructor() {
        this.state = {
            arrAy: []
        }
    }

    //进入队列
    enqueue(element) {
        this.state.arrAy.push(element)
    };

    //走出队列
    denqueue() {
        return this.state.arrAy.shift();
    };

    //读取队列开头以及队列结尾
    front() {
        return this.state.arrAy[0]
    };

    back() {
        return this.state.arrAy[this.state.arrAy.length - 1];
    };

    //返回所有的队列元素
    toString() {
        let retStr = '';
        this.state.arrAy.forEach(index => {
            retStr += index + '\n'
        });
        return retStr
    }

    //判断数组队列是否为0
    empty() {
        if (this.state.arrAy.length === 0) {
            return true
        } else {
            return false
        }
    }

}

//栈
class Stack {
    constructor() {
        this.arr = [];
        this.top = 0;
    }

    //入栈
    push(element) {
        this.arr[this.top++] = element;
    }

    //出栈
    //返回栈顶元素，同时将变量 top 的值减 1：
    //这个相当于是把数组如果从最顶上的栈顶向下返回一直到底部
    pop() {
        return this.arr[--this.top];
    }

    //返回数组的第 top-1 个位置的元素，即栈顶元素
    peek() {
        return this.arr[this.top - 1]
    }

    //栈直接清零
    clear() {
        this.top = 0
    }

    //栈的个数
    length() {
        return this.top;
    }
}

/*
* 链表  这个链表的就比较复杂一些
*链表是由一组节点组成的集合
* */

//创建节点
class Node {
    constructor(element) {
        this.element = element; // 每个节点保存的内容
        this.next = null; // 保存的指针，指向下一个节点
    }
}

//构建链表
class LinkList {
    constructor() {
        this.head = new Node('head');
    }

    //插入链表
    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    //删除节点
    remove(item) {
        let prevNode = this.findPrevious(item);
        if (!(prevNode.next === null)) {
            prevNode.next = prevNode.next.next
        }
    }

    findPrevious(item) {
        let currNode = this.head;
        while (!(currNode.next === null) && (currNode.next.element !== item)) {
            currNode = currNode.next;
        }
        return currNode;
    }


    find(item) {
        let currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode
    }

    //控制元素显示
    display() {
        let currNode = this.head;
        while (!(currNode.next === null)) {
            console.log(currNode.next.element);
            currNode = currNode.next
        }
    }
}

//集合
class Set {
    constructor() {
        this.dataStore = [];
    }

    //集合添加
    add(data) {
        //集合不能包括相同的，所以必须判断是否有出现过
        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            return true
        } else {
            return false
        }
    }

    //集合删除
    remove(data) {
        let pop = this.dataStore.indexOf(data);
        if (pop > -1) {
            this.dataStore.splice(pop, 1);
            return true
        } else {
            return false
        }
    }

    //返回集合数据
    show() {
        return this.dataStore;
    }

    //检查成员是否属于集合
    contains(data) {
        if (this.dataStore.indexOf(data) > -1) {
            return true
        } else {
            return false
        }
    }

    //并集
    /*
    * 思路：两个集合去并集，也就是说，一样的和不一样的全部放到一起，一样的给去掉
    * 1、临时集合存放其中一个
    * 2、临时集合判断合并的集合是否有一样的，如果不一样，就加进来
    * */
    union(set) {
        let tempSet = new Set();        //递归函数，递归函数就是在方法中使用到了自己
        for (let i = 0; i < this.dataStore.length; i++) {
            tempSet.add(this.dataStore[i])
        }
        for (let i = 0; i < set.dataStore.length; i++) {
            if (!tempSet.contains(set.dataStore[i])) {
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }
        return tempSet;
    }

    //交集
    intersect(set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++) {
            if (tempSet.contains(set)) {
                tempSet.add(this.dataStore[i]);
            }
        }
    }

    //补集
    difference(set) {
        let temSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++) {
            if (!set.contains(this.dataStore[i])) {
                temSet.add(this.dataStore[i])
            }
        }
        return temSet
    }
}

//树：用的最多的是二叉树，然后就是特殊的二叉树：二叉查找树
/*
* 这里直接讲解的是二叉查找树
* */

//树的节点
class NodeTree {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;       //左树
        this.right = right;     //右树
    }
    show() {
        return this.data
    }
}

//二叉查找树
class BST {
    constructor() {
        this.root = null
    }
    /*
    * 添加节点以及对应思想
    * 1、检查是否有根节点，如果没有，那么这个新加的就是新加上的节点
    * 2、如果有根节点，那么,就要根据左右两边都要小于原则，进行下一步操作
    * 3、这里添加的时候你会发现，当添加了第一个数据之后，后续的数据是根据判断，小
    * 的数据给放到左边节点，大于的数据给放到右边节点
    * */
    insert(data) {
        let n = new NodeTree(data, null, null);
        //次检查 BST 是否有根节点，如果没有，那么这是棵新树
        if (this.root === null) {
            this.root = n
        } else {
            let current = this.root;
            let parent;
            //while true：里面必须有break跳出，不然会一直循环下去
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if (current === null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }
    /*
    * 遍历二叉查找树
    *中序遍历：中序遍历按照节点上的键值，以升序访问 BST 上的所有节点。
    * */
    inOrder(node) {
        if (!(node === null)) {
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }
    //获取最小值：直接查询左边接节点
    getMin() {
        let current = this.root;
        while (!(current.left === null)) {
            current = current.left
        }
        return current.data;
    }
    //获取最大值
    getMax() {
        let current = this.root;
        while (!(current.right === null)) {
            current = current.right;
        }
        return current.data;
    }
    /*
    * 查找给定值
    * 思路：通过给定值判断大小，确定左边树还是右边，再确定是需要遍历左边还是右边
    * */
    find(data) {
        let current = this.root;
        while (current !== null) {
            if (data === current.data) {
                return current
            } else if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return current
    }
}


//数据结构
let structure = {
    //执行队列案例
    startstructure: function () {
        ajax({
            url: './infotation/dancer.txt',
            type: 'get',
            success: function (response, xml) {
                let maleDancers = new Queue();
                let femaleDancers = new Queue();
                document.getElementById('myDiv').innerText = response;
                let array = response.split('\n');
                //对男女进行分组
                array.forEach(ctn => {
                    if (ctn) {
                        if (ctn.split(' ')[0] === '男') {
                            maleDancers.enqueue(ctn);
                        } else {
                            femaleDancers.enqueue(ctn);
                        }
                    }
                });
                let showCtn = '以下是男女分配结果；' + '\n';
                while (!femaleDancers.empty()) {
                    showCtn += maleDancers.denqueue() + '分配的搭档是：' +
                        femaleDancers.denqueue() + '\n';
                }
                showCtn += '以下是未分配到的等待人员' + '\n';
                if (!maleDancers.empty()) showCtn += maleDancers.toString();
                if (!femaleDancers.empty()) showCtn += femaleDancers.toString();
                document.getElementById('anwarse').innerText = showCtn;
            },
            fail: function (status) {
            }
        });
    },
    //执行栈案例
    stacktest: function () {
        let checkWord = function () {
            let getWprldone = 'hello';
            let getWorldTow = 'racecar';
            document.getElementById('huiwen1').innerText = getWprldone + '是否是回文' + checkSureWord(getWprldone);
            document.getElementById('huiwen2').innerText = getWorldTow + '是否是回文' + checkSureWord(getWorldTow);
        };
        let checkSureWord = function (world) {
            let s = new Stack();
            //后期数据不断压入栈低
            for (let i = 0; i < world.length; i++) {
                s.push(world[i]);
            }
            //获取回值
            let rword = '';
            while (s.length() > 0) {
                rword += s.pop();
            }
            if (world === rword) {
                return true;
            } else {
                return false;
            }
        };

        //执行栈回文的情况
        checkWord();
    },
    //测试执行链表
    LinkListTest: function () {
        let cities = new LinkList();
        cities.insert('Conway', 'head');
        cities.display();
    },
    //集合
    setTest: function () {
        let cis = new Set();
        cis.add("Mike");
        cis.add("Clayton");
        cis.add("Jennifer");
        cis.add("Raymond");
        let dmp = new Set();
        dmp.add("Raymond");
        dmp.add("Cynthia");
        dmp.add("Jonathan");
        let it = new Set();
        it = cis.union(dmp);
        console.log(it);
    },
    //树，执行树
    treeTest: function () {
        let nums = new BST();
        nums.insert(23);
        nums.insert(45);
        nums.insert(16);
        nums.insert(37);
        nums.insert(3);
        nums.insert(99);
        nums.insert(22);
        nums.inOrder(nums.root);        //中序排列
        console.log('最小值是：' + nums.getMin());
        console.log('最大值是：' + nums.getMax());
        console.log('查找 23 在二叉树中' + nums.find(23));
    }
};

//排序算法
let sortCtn = {
    //执行基本排序
    BubbleSort: function () {
        let number = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48, 48];
        //冒泡排序
        document.getElementById('BubbleCtn').innerText = (this.BubbleFun(JSON.parse(JSON.stringify(number)))).toString();
        document.getElementById('esSort').innerText = (this.esSort(JSON.parse(JSON.stringify(number)))).toString();
        //选择排序
        document.getElementById('selectionCtn').innerText = (this.selectionSort(JSON.parse(JSON.stringify(number)))).toString();
        //插入排序
        document.getElementById('insertSortCtn').innerText = (this.insertSort(JSON.parse(JSON.stringify(number)))).toString();
    },
    //使用冒泡排序
    BubbleFun: function (arrAy) {
        let ax = arrAy.length;
        while (ax > 0) {
            let pos = 0;
            for (let j = 0; j < ax; j++) {
                if (arrAy[j] > arrAy[j + 1]) {
                    pos = j;
                    //这里相当于是冒泡的数据交换
                    let temp = arrAy[j];
                    arrAy[j] = arrAy[j + 1];
                    arrAy[j + 1] = temp;
                }
            }
            //这里的用意在于获取到最后一次比较的索引所在，然后数组以这里为终点开始比较即可
            ax = pos;
        }
        return arrAy;
    },
    //使用es6中的冒泡排序
    esSort: function (arrAy) {
        //鉴别条件
        const numberSorting = (s1, s2) => {
            if (s1 < s2) return -1;
            return 1
        };
        //es6的sort方法，sort中附带排序条件
        return arrAy.sort(numberSorting);
    },
    //选择排序
    selectionSort: function (arr) {
        let len = arr.length;
        let minIndex, temp;
        for (var i = 0; i < len - 1; i++) {     //这里使用var，是因为let定义的，只会在()里面生效，如果使用let，这样会出bug
            minIndex = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
        return  arr;
    },
    //插入排序
    insertSort: function (arr) {
        let len = arr.length;
        for (var i = 1; i < len; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >=0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
        return arr
    }
};
window.onload = function () {
    //执行队列
    structure.startstructure();
    //执行栈
    structure.stacktest();
    //执行链表
    structure.LinkListTest();
    //集合
    structure.setTest();
    //树
    structure.treeTest();
    //排序算法：冒泡排列
    sortCtn.BubbleSort();
};


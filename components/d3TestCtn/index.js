let init = {
    test1: function () {
        //1.添加具体的svg并提供对应的属性
        const width = 1000, height = 600;
        const svg = d3.select("#takeCtn1").append("svg")
            .attr("height", height)
            .attr("width", width);
        const chart = svg.append("g")
            .attr("transform", d => `translate(${[60, 60]})`);


        //2.对数据进行属性处理
        // Hierarchy：这个是d3.js中对数据进行处理的东西，simpleHierarchy是我们获取到的数据
        const root = d3.hierarchy(simpleHierarchy);     //数据处理


        //3.创建一个数布局
        const tree = d3.tree()                          //使用默认的设置创建一个新的树布局
            .size([width - 120, height - 120]); // top-down

        //将数据传入树布局中
        const treeData = tree(root);
        const nodes = treeData.descendants();


        //这个应该是设置颜色的
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
            .domain(d3.extent(nodes, n => n.depth));

        chart.selectAll("circle")
            .data(nodes)
            .join("circle")
            .attr("r", 20)
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .style("fill", d => colorScale(d.depth));
    },
    test2: function () {
        const width = 1000, height = 600;
        const svg = d3.select("#takeCtn2").append("svg")
            .attr("height", height)
            .attr("width", width);
        const chart = svg.append("g")
            .attr("transform", d => `translate(${[60, 60]})`);

        const root = d3.hierarchy(simpleHierarchy);

        const tree = d3.tree()
            .size([width - 120, height - 120]); // top-down
        const treeData = tree(root);

        const nodes = treeData.descendants();


        //设置对应的线条的样式
        // const widthScale = d3.scaleLinear().range([1,16])
        //     .domain(d3.extent(nodes, n => n.height));

        chart.selectAll("line")
            .data(nodes.filter(d => d.parent))
            .join("line")
            .attr("x1", d => d.parent.x)
            .attr("y1", d => d.parent.y)
            .attr("x2", d => d.x)
            .attr("y2", d => d.y)
            .style("stroke-width", 1)
            .style("opacity", d => d.depth * .25 * .6 + .4)
    },
    test3: function () {
        //1.添加具体的svg并提供对应的属性
        const width = 1000, height = 600;
        const svg = d3.select('#takeCtn3').append('svg')
            .attr("height", height)
            .attr("width", width);
        const chart = svg.append("g")
            .attr("transform", d => `translate(${[60, 60]})`);

        const root = d3.hierarchy(simpleHierarchy);
        //设置对对应标题的数据修改
        root.eachBefore(function (d) {
            if (!d.parent) {
                d.number = 1;
            } else {
                d.number = `${d.parent.number}.${d.parent.children.indexOf(d) + 1}`;
            }
        });

        const tree = d3.tree()
            .size([width - 120, height - 120]); // top-down
        const treeData = tree(root);
        console.log(treeData);
        const nodes = treeData.descendants();
        const links = treeData.links();         //连接节点，使用links()

        //这个应该是设置颜色的
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
            .domain(d3.extent(nodes, n => n.depth));

        //配置圆形
        chart.selectAll("circle")
            .data(nodes)
            .join("circle")
            .attr("r", 20)
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .style("fill", d => colorScale(d.depth));

        //配置连线
        chart.selectAll("line")
            .data(links)
            .join("line")
            .attr("r", 20)
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y)
            .style("stroke-width", d => (d.target.height + 1) * (d.target.height + 1))
            .style("opacity", d => d.target.depth * .25 * .6 + .4);

        //添加文本
        chart.selectAll("text")
            .data(nodes)
            .join("text")
            .text(d => d.data.id)
            .attr("x", d => d.x)
            .attr("y", d => d.y)

        // node.append("text")
        //     .attr('x', 5)
        //     .attr('y', 5)
        //     .attr("class", function(d) {
        //         if(d.height > 0 && d.depth != 0) {
        //             return "continent";
        //         } else if (d.depth == 0){
        //             return "world";
        //         } else {
        //             return "country";
        //         }
        //     })
        //     .text(d => d.data.id);
    },
    test4: function () {
        let data = {
            name: "中国",
            children: [
                {
                    name: "浙江",
                    children: [
                        {name: "杭州", value: 100},
                        {name: "宁波", value: 100},
                        {name: "温州", value: 100},
                        {name: "绍兴", value: 100}
                    ]
                },
                {
                    name: "广西",
                    children: [
                        {
                            name: "桂林",
                            children: [
                                {name: "秀峰区", value: 100},
                                {name: "叠彩区", value: 100},
                                {name: "象山区", value: 100},
                                {name: "七星区", value: 100}
                            ]
                        },
                        {name: "南宁", value: 100},
                        {name: "柳州", value: 100},
                        {name: "防城港", value: 100}
                    ]
                },
                {
                    name: "新疆",
                    children: [
                        {name: "乌鲁木齐"},
                        {name: "克拉玛依"},
                        {name: "吐鲁番"},
                        {name: "哈密"}
                    ]
                }
            ]
        };
        const width = 1000, height = 800;
        let margin = 60;
        let svg = d3.select("#takeCtn4").append('svg')
            .attr("height", height)
            .attr("width", width);
        //创建分组
        let g = svg.append("g")
            .attr("transform", "translate(" + margin + "," + margin + ")");


        //创建一个层级布局
        let hierarchyData = d3.hierarchy(data)
            .sum(function (d, i) {
                return d.value;
            });
//    返回的节点和每一个后代会被附加如下属性:
//        node.data - 关联的数据，由 constructor 指定.
//        node.depth - 当前节点的深度, 根节点为 0.
//        node.height - 当前节点的高度, 叶节点为 0.
//        node.parent - 当前节点的父节点, 根节点为 null.
//        node.children - 当前节点的孩子节点(如果有的话); 叶节点为 undefined.
//        node.value - 当前节点以及 descendants(后代节点) 的总计值; 可以通过 node.sum 和 node.count 计算.

        //创建一个树状图
        let tree = d3.tree()
            .size([width - 400, height - 200])
            .separation(function (a, b) {
                return (a.parent == b.parent ? 1 : 2) / a.depth;//一种更适合于径向布局的变体，可以按比例缩小半径差距:
            });

        //初始化树状图数据
        let treeData = tree(hierarchyData);
        console.log(treeData);//这里的数据treeData与hierarchyData 相同

        //获取边和节点
        let nodes = treeData.descendants();
        let links = treeData.links();

        //创建贝塞尔曲线生成器
        let link = d3.linkHorizontal()
            .x(function (d) {
                return d.y;
            })//生成的曲线在曲线的终点和起点处的切线是水平方向的
            .y(function (d) {
                return d.x;
            });


        //绘制边
        g.append('g')
            .selectAll('path')
            .data(links)
            .enter()
            .append('path')
            .attr('d', function (d, i) {
                let start = {x: d.source.x, y: d.source.y};
                let end = {x: d.target.x, y: d.target.y};
                return link({source: start, target: end});
            })
            .attr('stroke', 'pink')
            .attr('stroke-width', 1)
            .attr('fill', 'none');


        //创建节点与文字分组
        let gs = g.append('g')
            .selectAll('.g')
            .data(nodes)
            .enter()
            .append('g')
            .attr('transform', function (d, i) {

                return 'translate(' + d.y + ',' + d.x + ')';

            });


        //绘制文字和节点
        gs.append('circle')
            .attr('r', 10)
            .attr('fill', 'blue')
            .attr('stroke-width', 1)
            .attr('stroke', 'pink');


        gs.append('text')
            .attr('x', function (d, i) {
                return d.children ? -60 : 10;//有子元素的话  当前节点的文字前移40
            })
            .attr('y', -5)
            .attr('dy', 10)
            .text(function (d, i) {
                return d.data.name;
            })

    },
    test5: function () {
        let data = {
            name: "中国",
            children: [
                {
                    name: "浙江",
                    children: [
                        {
                            name: "杭州",
                            value: 100,
                            children: [
                                {
                                    id: '10086',
                                    name: "共有节点1",
                                    value: 100,
                                    children: [
                                        {
                                            id: '10087',
                                            name: "共有节点总",
                                            value: 100,
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "新疆",
                    children: [
                        {
                            name: "乌鲁木齐",
                            value: 100,
                            children: [
                                {
                                    id: '10086',
                                    name: "共有节点2",
                                    value: 100,
                                    children: [
                                        {
                                            id: '10087',
                                            name: "共有节点总",
                                            value: 100,
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "克拉玛依",
                            children: [
                                {
                                    id: '10086',
                                    name: "共有节点3",
                                    value: 100,
                                    children: [
                                        {
                                            id: '10088',
                                            name: "共有节点总2",
                                            value: 100,
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "吐鲁番",
                            children: [
                                {
                                    id: '10086',
                                    name: "共有节点4",
                                    value: 100,
                                    children: [
                                        {
                                            id: '10088',
                                            name: "共有节点总2",
                                            value: 100,
                                        }
                                    ]
                                }
                            ]
                        },
                        {name: "哈密"}
                    ]
                }
            ]
        };
        const width = 1000, height = 800;
        let margin = 60;
        let svg = d3.select("#takeCtn5").append('svg')
            .attr("height", height)
            .attr("width", width);
        //创建分组
        let chart = svg.append("g")
            .attr("transform", "translate(" + margin + "," + margin + ")");

        //创建一个层级布局
        let hierarchyData = d3.hierarchy(data)
            .sum(function (d, i) {
                return d.value;
            });


        console.log(hierarchyData);

        //创建一个树状图
        let tree = d3.tree()
            .size([width - 400, height - 200])
            .separation(function (a, b) {
                return (a.parent == b.parent ? 1 : 2) / a.depth;//一种更适合于径向布局的变体，可以按比例缩小半径差距:
            });

        //初始化树状图数据
        let treeData = tree(hierarchyData);

        //获取边和节点
        let nodes = treeData.descendants();
        let links = treeData.links();

        //配置圆形节点
        chart.selectAll("circle")
            .data(nodes)
            .join("circle")
            .attr("r", 6)
            .attr('transform', function (d, i) {
                return 'translate(' + d.y + ',' + d.x + ')';
            })
            .attr('stroke-width', 1)
            .attr('stroke', 'pink');

        //绘制文本
        chart.selectAll('text')
            .data(nodes)
            .join("text")
            .attr('transform', function (d) {
                return 'translate(' + (d.y + 10) + ',' + (d.x + 5) + ')';
            })
            .text(function (d) {
                return d.data.name;
            });

        //设置连线
        //设置靠左边为头为主
        //假设我对links进行数据强制处理
        //使用x1,y1,x2,y2属性指定线段的起止点坐标
        //发现可以通过设置x2，y2排列的节点
        //问题在于：1，如果确定共有节点，2，共有节点如果判断
        chart.selectAll("line")
            .data(links)
            .enter()
            .append("line")
            .attr("x1", d => d.source.y)
            .attr("y1", d => d.source.x)
            .attr("x2", d => d.target.y)
            .attr("y2", d => d.target.x)
            .style("stroke-width", 1)
            .style("opacity", d => d.target.depth * .25 * .6 + .4);
    },
    //右边两个层级的双树形结构
    test6: function () {

        let data = {
            name: "中国",
            children: [
                {
                    name: "浙江",
                    children: [
                        {
                            name: "杭州",
                            value: 100,
                            children: [
                                {
                                    name: "共有节点1",
                                    value: 100,
                                    children: [
                                        {
                                            id: 'zuobian',
                                            name: "共有节点总",
                                            Grade: 2,
                                            children: [
                                                {
                                                    id: 'last',
                                                    name: "最终",
                                                    Grade: 1,
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "新疆",
                    children: [
                        {
                            name: "乌鲁木齐",
                            value: 100,
                            children: [
                                {
                                    name: "共有节点2",
                                    value: 100,
                                    children: [
                                        {
                                            id: 'zuobian',
                                            name: "共有节点总",
                                            Grade: 2,
                                            children: [
                                                {
                                                    id: 'last',
                                                    name: "最终",
                                                    Grade: 1,
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "克拉玛依",
                            children: [
                                {
                                    name: "共有节点3",
                                    value: 100,
                                    children: [
                                        {
                                            id: 'zuobian2',
                                            name: "test",
                                            Grade: 2,
                                            children: [
                                                {
                                                    id: 'last',
                                                    name: "最终",
                                                    Grade: 1,
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "吐鲁番",
                            children: [
                                {
                                    name: "共有节点4",
                                    value: 100,
                                    children: [
                                        {
                                            id: 'zuobian2',
                                            name: "test",
                                            Grade: 2,
                                            children: [
                                                {
                                                    id: 'last',
                                                    name: "最终",
                                                    Grade: 1,
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "哈密",
                            children: [
                                {
                                    name: "哈密1",
                                    value: 100,
                                    children: [
                                        {
                                            id: 'zuobian2',
                                            name: "test",
                                            Grade: 2,
                                            children: [
                                                {
                                                    id: 'last',
                                                    name: "最终",
                                                    Grade: 1,
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "哈密2",
                                    value: 100,
                                },
                                {
                                    name: "哈密3",
                                    value: 100,
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        const width = 1000, height = 800;
        let margin = 60;
        let svg = d3.select("#takeCtn6").append('svg')
            .attr("height", height)
            .attr("width", width);
        //创建分组
        let g = svg.append("g")
            .attr("transform", "translate(" + margin + "," + margin + ")");


        //创建一个层级布局
        let hierarchyData = d3.hierarchy(data)
            .sum(function (d, i) {
                return d.value;
            });

        //创建一个树状图
        let tree = d3.tree()
            .size([width - 400, height - 200])
            .separation(function (a, b) {
                return (a.parent == b.parent ? 1 : 2) / a.depth;//一种更适合于径向布局的变体，可以按比例缩小半径差距:
            });

        //初始化树状图数据
        let treeData = tree(hierarchyData);
        console.log(treeData);//这里的数据treeData与hierarchyData 相同

        //获取边和节点
        let nodes = treeData.descendants();
        let links = treeData.links();

        //创建贝塞尔曲线生成器
        let link = d3.linkHorizontal()
            .x(function (d) {
                return d.y;
            })//生成的曲线在曲线的终点和起点处的切线是水平方向的
            .y(function (d) {
                return d.x;
            });

        //做特殊的队列判断，针对对原型的隐藏
        //需要获取到反向等级
        const Grade = 2;        //右边层次最大等级
        const zuo = ['last'];   //假设通过等级，获取到等级前一位的具体数据
        const toZuo = [];       //保存当前对应上一节点以及执行的数据

        const zuo1 = ['zuobian', 'zuobian2', 'last'];
        const toZuo1 = [];
        //确定连线坐标节点
        const toZuo2 = [];

        //针对线的隐藏·1
        const zuo3 = ['zuobian', 'zuobian2', 'last'];
        const toZuo3 = [];


        //绘制边
        g.append('g')
            .selectAll('path')
            .data(links)
            .enter()
            .append('path')
            .attr('d', function (d) {
                //1.查询是否是某个数组
                if (zuo1.indexOf(d.target.data.id) > -1 && toZuo1.indexOf(d.target.data.id) > -1) {
                    //根据具体的情况去使用之前确定的坐标
                    let thisTakeCtn = '';
                    toZuo2.forEach(ctn => {
                        if (ctn.target.data.id === d.target.data.id) {
                            thisTakeCtn = ctn;
                        }
                    });
                    let start = {
                        x: d.source.x,
                        y: d.source.y
                    };
                    let end = {
                        x: thisTakeCtn.target.x,
                        y: thisTakeCtn.target.y
                    };
                    return link({source: start, target: end});

                } else {
                    if (zuo1.indexOf(d.target.data.id) > -1) {
                        toZuo1.push(d.target.data.id);
                        toZuo2.push(d)
                    }
                    let start = {
                        x: d.source.x,
                        y: d.source.y
                    };
                    let end = {
                        x: d.target.x,
                        y: d.target.y
                    };
                    return link({source: start, target: end});
                }
            })
            .attr('stroke', 'pink')
            .attr('stroke-width', 1)
            .attr('fill', 'none')
            .attr('visibility', function (d) {
                //确定最终能够被用于连线的
                if (zuo.indexOf(d.target.data.id) > -1) {
                    /*
                    * 对于连线的隐藏就非常特殊
                    * 1、由于连线当前的会对前一个造成影响，所以必须取到好一位
                    * 2、如何取到其他位数的，获取到其他位数之后，
                    * */
                    if (toZuo.indexOf(d.source.data.id) > -1) {
                        return 'hidden'
                    } else {
                        toZuo.push(d.source.data.id);
                        return 'visible'
                    }
                } else {
                    return 'visible'
                }
            })
        ;


        //创建节点与文字分组
        //测试只接受第一个对外的
        let gs = g.append('g')
            .selectAll('.g')
            .data(nodes)
            .enter()
            .append('g')
            .attr('transform', function (d) {
                return 'translate(' + d.y + ',' + d.x + ')';
            })
            .attr("visibility", function (d) {
                //执行对非必要的隐藏
                if (zuo3.indexOf(d.data.id) > -1 && toZuo3.indexOf(d.data.id) > -1) {
                    return 'hidden'
                } else {
                    if (zuo3.indexOf(d.data.id) > -1) {
                        toZuo3.push(d.data.id);
                    }
                    return 'visible'
                }
            });

        //假如不使用曲线，使用实现liner
        // g.append('g')
        //     .selectAll('line'
        //     .data(links)
        //     .enter())
        //     .append('line')
        //     .attr('stroke', 'pink')
        //     .attr('stroke-width', 1)
        //     .attr('fill', 'none')
        //     .attr("x1", d => d.source.y)
        //     .attr("y1", d => d.source.x)
        //     .attr("x2", d => d.target.y)
        //     .attr("y2", d => d.target.x);

        //绘制文字和节点
        gs.append('circle')
            .attr('r', 10)
            .attr('fill', 'blue')
            .attr('stroke-width', 1)
            .attr('stroke', 'pink');

        //写入文字
        gs.append('text')
            .attr('x', function (d, i) {
                return d.children ? -60 : 10;//有子元素的话  当前节点的文字前移40
            })
            .attr('y', -5)
            .attr('dy', 10)
            .text(function (d, i) {
                return d.data.name;
            })
    },
    test7: function () {
        /*
        * 还需要优化的地方
        * 1、文字，以及右边位置
        * 2、折叠
        * 3、具体右边的居中优化
        * */
        let data = {
            name: "中国",
            children: [
                {
                    name: "浙江",
                    children: [
                        {
                            name: "杭州",
                            value: 100,
                            children: [
                                {
                                    name: "共有节点1",
                                    value: 100,
                                    children: [
                                        {
                                            id: 'zuobian',
                                            name: "3级别",
                                            Grade: 3,
                                            children: [
                                                {
                                                    id: 'last',
                                                    name: "最终",
                                                    Grade: 2,
                                                    children: [
                                                        {
                                                            id: 'lastone',
                                                            name: "所有的源头",
                                                            Grade: 1,
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "新疆",
                    children: [
                        {
                            name: "乌鲁木齐",
                            value: 100,
                            children: [
                                {
                                    name: "共有节点2",
                                    value: 100,
                                    children: [
                                        {
                                            id: 'zuobian',
                                            name: "3级别",
                                            Grade: 3,
                                            children: [
                                                {
                                                    id: 'last',
                                                    name: "最终",
                                                    Grade: 2,
                                                    children: [
                                                        {
                                                            id: 'lastone',
                                                            name: "所有的源头",
                                                            Grade: 1,
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "克拉玛依",
                            children: [
                                {
                                    name: "共有节点3",
                                    value: 100,
                                    children: [
                                        {
                                            id: 'zuobian2',
                                            name: "test",
                                            Grade: 3,
                                            children: [
                                                {
                                                    id: 'last',
                                                    name: "最终",
                                                    Grade: 2,
                                                    children: [
                                                        {
                                                            id: 'lastone',
                                                            name: "所有的源头",
                                                            Grade: 1,
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "吐鲁番",
                            children: [
                                {
                                    name: "共有节点4",
                                    value: 100,
                                    children: [
                                        {
                                            id: 'zuobian2',
                                            name: "test",
                                            Grade: 3,
                                            children: [
                                                {
                                                    id: 'last',
                                                    name: "最终",
                                                    Grade: 2,
                                                    children: [
                                                        {
                                                            id: 'lastone',
                                                            name: "所有的源头",
                                                            Grade: 1,
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: "哈密",
                            children: [
                                {
                                    name: "哈密1",
                                    value: 100,
                                    children: [
                                        {
                                            id: 'zuobian2',
                                            name: "test",
                                            Grade: 3,
                                            children: [
                                                {
                                                    id: 'last',
                                                    name: "最终",
                                                    Grade: 2,
                                                    children: [
                                                        {
                                                            id: 'lastone',
                                                            name: "所有的源头",
                                                            Grade: 1,
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "哈密2",
                                    value: 100,
                                    children: [
                                        {
                                            id: 'zuobian6',
                                            name: "zuobian6",
                                            Grade: 3,
                                            children: [
                                                {
                                                    id: 'lastTest',
                                                    name: "老司机2",
                                                    Grade: 2,
                                                    children: [
                                                        {
                                                            id: 'lastone',
                                                            name: "所有的源头",
                                                            Grade: 1,
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "哈密3",
                                    value: 100,
                                    children: [
                                        {
                                            id: 'zuobian8',
                                            name: "zuobian8",
                                            Grade: 3,
                                            children: [
                                                {
                                                    id: 'teach3',
                                                    name: "老师3",
                                                    Grade: 2,
                                                    children: [
                                                        {
                                                            id: 'lastone',
                                                            name: "所有的源头",
                                                            Grade: 1,
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        const width = 1000, height = 800;
        let margin = 60;
        let svg = d3.select("#takeCtn7").append('svg')
            .attr("height", height)
            .attr("width", width);
        //创建分组
        let g = svg.append("g")
            .attr("transform", "translate(" + margin + "," + margin + ")");


        //创建一个层级布局
        let hierarchyData = d3.hierarchy(data)
            .sum(function (d, i) {
                return d.value;
            });

        //创建一个树状图
        let tree = d3.tree()
            .size([width - 400, height - 200])
            .separation(function (a, b) {
                return (a.parent == b.parent ? 1 : 2) / a.depth;//一种更适合于径向布局的变体，可以按比例缩小半径差距:
            });

        //初始化树状图数据
        let treeData = tree(hierarchyData);
        console.log(treeData);//这里的数据treeData与hierarchyData 相同

        //获取边和节点
        let nodes = treeData.descendants();
        let links = treeData.links();

        //创建贝塞尔曲线生成器
        let link = d3.linkHorizontal()
            .x(function (d) {
                return d.y;
            })//生成的曲线在曲线的终点和起点处的切线是水平方向的
            .y(function (d) {
                return d.x;
            });

        //做特殊的队列判断，针对对原型的隐藏
        //需要获取到反向等级
        const Grade = 3;        //右边层次最大等级
        const zuo = ['last', 'lastone'];   //假设通过等级，获取到等级前一位的具体数据
        const toZuo = [];       //保存当前对应上一节点以及执行的数据

        const zuo1 = ['zuobian', 'zuobian2', 'last', 'lastone'];
        const toZuo1 = [];
        //确定连线坐标节点
        const toZuo2 = [];

        //针对线的隐藏·1
        const zuo3 = ['zuobian', 'zuobian2', 'last', 'lastone'];
        const toZuo3 = [];


        //绘制边
        g.append('g')
            .selectAll('path')
            .data(links)
            .enter()
            .append('path')
            .attr('d', function (d) {
                //1.查询是否是某个数组
                if (zuo1.indexOf(d.target.data.id) > -1 && toZuo1.indexOf(d.target.data.id) > -1) {
                    //根据具体的情况去使用之前确定的坐标
                    let thisTakeCtn = '';
                    toZuo2.forEach(ctn => {
                        if (ctn.target.data.id === d.target.data.id) {
                            thisTakeCtn = ctn;
                        }
                    });
                    let start = {
                        x: d.source.x,
                        y: d.source.y
                    };
                    let end = {
                        x: thisTakeCtn.target.x,
                        y: thisTakeCtn.target.y
                    };
                    return link({source: start, target: end});

                } else {
                    if (zuo1.indexOf(d.target.data.id) > -1) {
                        toZuo1.push(d.target.data.id);
                        toZuo2.push(d)
                    }
                    let start = {
                        x: d.source.x,
                        y: d.source.y
                    };
                    let end = {
                        x: d.target.x,
                        y: d.target.y
                    };
                    return link({source: start, target: end});
                }
            })
            .attr('stroke', 'pink')
            .attr('stroke-width', 1)
            .attr('fill', 'none')
            .attr('visibility', function (d) {
                //确定最终能够被用于连线的
                if (zuo.indexOf(d.target.data.id) > -1) {
                    /*
                    * 对于连线的隐藏就非常特殊
                    * 1、由于连线当前的会对前一个造成影响，所以必须取到好一位
                    * 2、如何取到其他位数的，获取到其他位数之后，
                    * */
                    if (toZuo.indexOf(d.source.data.id) > -1) {
                        return 'hidden'
                    } else {
                        toZuo.push(d.source.data.id);
                        return 'visible'
                    }
                } else {
                    return 'visible'
                }
            });


        //创建节点与文字分组
        //测试只接受第一个对外的
        let gs = g.append('g')
            .selectAll('.g')
            .data(nodes)
            .enter()
            .append('g')
            .attr('transform', function (d) {
                let y = d.y;
                let x = d.x;
                // if (d.data.Grade) {
                //     //所有右边树加大距离
                //     y = y + 100
                // }
                return 'translate(' + y + ',' + x + ')';
            })
            .attr("visibility", function (d) {
                //执行对非必要的隐藏
                if (zuo3.indexOf(d.data.id) > -1 && toZuo3.indexOf(d.data.id) > -1) {
                    return 'hidden'
                } else {
                    if (zuo3.indexOf(d.data.id) > -1) {
                        toZuo3.push(d.data.id);
                    }
                    return 'visible'
                }
            });

        //绘制文字和节点
        gs.append('circle')
            .attr('r', 10)
            .attr('fill', 'blue')
            .attr('stroke-width', 1)
            .attr('stroke', 'pink');

        //写入文字
        gs.append('text')
            .attr('x', function (d, i) {
                return d.children ? -60 : 10;//有子元素的话  当前节点的文字前移40
            })
            .attr('y', -5)
            .attr('dy', 10)
            .text(function (d, i) {
                return d.data.name;
            })
    }
};

window.onload = function () {
    //画出点
    init.test1();
    //画线
    init.test2();
    //根据获取到的节点进行确定线的连接
    init.test3();
    //测试文字以及对应方向以及数据
    init.test4();
    //测试版本
    init.test5();
    //测试版本
    init.test6();
    //测试版本
    init.test7();
};

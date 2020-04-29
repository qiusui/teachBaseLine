//测试关系图
let dataCtn = [
    {
        name: '校园大数据',
        symbolSize: 120,
        draggable: true,
        category: 0,
        itemStyle: {
            normal: {
                borderColor: '#04f2a7',
                borderWidth: 6,
                shadowBlur: 20,
                shadowColor: '#04f2a7',
                color: '#001c43',
            }
        }
    },
    {
        name: '舆情大数据',
        symbolSize: 100,
        itemStyle: {
            normal: {
                borderColor: '#04f2a7',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: '#04f2a7',
                color: '#001c43',
            }
        },
        category: 1,

    },
    {
        name: '用户分析',
        symbolSize: 80,
        category: 1,
        itemStyle: {
            normal: {
                borderColor: '#04f2a7',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: '#04f2a7',
                color: '#001c43',
            }
        },

    },
    {
        name: '话题分析',
        symbolSize: 80,
        category: 1,
        itemStyle: {
            normal: {
                borderColor: '#82dffe',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: '#04f2a7',
                color: '#001c43',
            }
        },

    },
    {
        name: '评论分析',
        symbolSize: 80,
        category: 1,
        itemStyle: {
            normal: {
                borderColor: '#82dffe',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: '#04f2a7',
                color: '#001c43',
            }
        },

    },
    {
        name: '图书馆分析',
        symbolSize: 100,
        category: 2,
        itemStyle: {
            normal: {
                borderColor: '#82dffe',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: '#04f2a7',
                color: '#001c43',
            }
        },

    },
    {
        name: '借阅分析',
        symbolSize: 80,
        category: 2,
        itemStyle: {
            normal: {
                borderColor: '#b457ff',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: '#b457ff',
                color: '#001c43'
            }
        },

    },
    {
        name: '借阅排行',
        symbolSize: 80,
        itemStyle: {
            normal: {
                borderColor: '#82dffe',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: '#04f2a7',
                color: '#001c43'

            }
        },
        category: 2,

    },
    {
        name: '图书收录',
        symbolSize: 80,
        itemStyle: {
            normal: {
                borderColor: '#82dffe',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: '#04f2a7',
                color: '#001c43'
            }
        },
        category: 2,
    },
    {
        name: '图书分析',
        symbolSize: 80,
        category: 2,
        itemStyle: {
            normal: {
                borderColor: '#82dffe',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: '#04f2a7',
                color: '#001c43'
            }
        },
    },
    {
        name: '中立',
        symbolSize: 80,
        x: 300,
        y: 300,
        fixed: true,
        itemStyle: {
            normal: {
                borderColor: '#82dffe',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: '#04f2a7',
                color: '#001c43'
            }
        },
    },
    // {
    //     name: '测试新加',
    //     symbolSize: 80,
    //     x: 200,
    //     y: 500,
    //     fixed: true,
    //     itemStyle: {
    //         normal: {
    //             borderColor: '#82dffe',
    //             borderWidth: 4,
    //             shadowBlur: 10,
    //             shadowColor: '#04f2a7',
    //             color: '#001c43'
    //         }
    //     },
    // }
];
let linksCtn = [
    {
        source: '校园大数据',
        target: '舆情大数据'

    },
    {
        source: '校园大数据',
        target: '图书馆分析',
    },
    {
        source: '舆情大数据',
        target: '用户分析',
    },
    {
        source: '舆情大数据',
        target: '话题分析',
    },
    {
        source: '舆情大数据',
        target: '评论分析',
    },
    {
        source: '校园大数据',
        target: '图书馆分析',
    },
    {
        source: '图书馆分析',
        target: '图书分析',
    },
    {
        source: '图书馆分析',
        target: '借阅分析',
    },
    {
        source: '图书馆分析',
        target: '借阅排行',
        value: 'DNA',
    }, {
        source: '图书馆分析',
        target: '图书收录'
    }, {
        source: '中立',
        target: '中立'
    },
    // {
    //     source: '测试新加',
    //     target: '测试新加'
    // }
];
let option = {
    backgroundColor: '#1a4377',
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    color: ['#83e0ff', '#45f5ce', '#b158ff'],
    series: [
        {
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 1000,
                edgeLength: 50
            },
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            data: dataCtn,
            links: linksCtn,
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 5,
                    curveness: 0
                }
            },
            categories: [
                {name: '0'},
                {name: '1'},
                {name: '2'}
            ]
        }
    ]
};
let myChart = echarts.init(document.getElementById('OdfMes'));
myChart.setOption(option);
myChart.getZr().on('contextmenu', toNewCtn);
let addNumber = 0;                             //添加的数量
function toNewCtn(params) {
    params.event.preventDefault();      //阻止鼠标的默认事件
    dataCtn.push({
        name: '测试新加' + addNumber,
        symbolSize: 80,
        //fixed: true,
        itemStyle: {
            normal: {
                borderColor: '#82dffe',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: '#04f2a7',
                color: '#001c43'
            }
        },
    });
    linksCtn.push({
        source: '测试新加' + addNumber,
        target: '测试新加' + addNumber
    });
    //下面这个就是重新画关系图
    myChart.setOption({
        series: [{
            data: dataCtn,
            links: linksCtn
        }]
    });
    addNumber += 1;
}

//测试桑吉图
function sanTest() {
    let data = {
            "nodes": [
                {"name": "Total"},
                {"name": "Environment"},
                {"name": "Land use"},
                {"name": "Cocoa butter (Organic)"},
                {"name": "Cocoa mass (Organic)"},
                {"name": "Hazelnuts (Organic)"},
                {"name": "Cane sugar (Organic)"},
                {"name": "Vegetables (Organic)"},
                {"name": "Climate change"},
                {"name": "Harmful substances"},
                {"name": "Water use"},
                {"name": "Resource depletion"},
                {"name": "Refrigeration"},
                {"name": "Packaging"},
                {"name": "Human rights"},
                {"name": "Child labour"},
                {"name": "Coconut oil (Organic)"},
                {"name": "Forced labour"},
                {"name": "Health safety"},
                {"name": "Access to water"},
                {"name": "Freedom of association"},
                {"name": "Access to land"},
                {"name": "Sufficient wage"},
                {"name": "Equal rights migrants"},
                {"name": "Discrimination"},
                {"name": "Working hours"}
            ],
            "links": [
                {"source": "Total", "target": "Environment", "value": 0.342284047256003},
                {"source": "Environment", "target": "Land use", "value": 0.32322870366987},
                {"source": "Land use", "target": "Cocoa butter (Organic)", "value": 0.177682517071359},
                {"source": "Land use", "target": "Cocoa mass (Organic)", "value": 0.137241325342711},
                {"source": "Land use", "target": "Hazelnuts (Organic)", "value": 0.00433076373512774},
                {"source": "Land use", "target": "Cane sugar (Organic)", "value": 0.00296956039863467},
                {"source": "Land use", "target": "Vegetables (Organic)", "value": 0.00100453712203756},
                {"source": "Environment", "target": "Climate change", "value": 0.0112886157414413},
                {"source": "Climate change", "target": "Cocoa butter (Organic)", "value": 0.00676852971933996},
                {"source": "Climate change", "target": "Cocoa mass (Organic)", "value": 0.00394686874786743},
                {"source": "Climate change", "target": "Cane sugar (Organic)", "value": 0.000315972058711838},
                {"source": "Climate change", "target": "Hazelnuts (Organic)", "value": 0.000218969462265292},
                {"source": "Climate change", "target": "Vegetables (Organic)", "value": 3.82757532567656e-05},
                {"source": "Environment", "target": "Harmful substances", "value": 0.00604275542495656},
                {"source": "Harmful substances", "target": "Cocoa mass (Organic)", "value": 0.0055125989240741},
                {"source": "Harmful substances", "target": "Cocoa butter (Organic)", "value": 0.000330017607892127},
                {"source": "Harmful substances", "target": "Cane sugar (Organic)", "value": 0.000200138892990337},
                {"source": "Harmful substances", "target": "Hazelnuts (Organic)", "value": 0},
                {"source": "Harmful substances", "target": "Vegetables (Organic)", "value": 0},
                {"source": "Environment", "target": "Water use", "value": 0.00148345269044703},
                {"source": "Water use", "target": "Cocoa butter (Organic)", "value": 0.00135309891304186},
                {"source": "Water use", "target": "Cocoa mass (Organic)", "value": 0.000105714137908639},
                {"source": "Water use", "target": "Hazelnuts (Organic)", "value": 1.33452642581887e-05},
                {"source": "Water use", "target": "Cane sugar (Organic)", "value": 8.78074837009238e-06},
                {"source": "Water use", "target": "Vegetables (Organic)", "value": 2.5136268682477e-06},
                {"source": "Environment", "target": "Resource depletion", "value": 0.000240519729288764},
                {"source": "Resource depletion", "target": "Cane sugar (Organic)", "value": 0.000226237279345084},
                {"source": "Resource depletion", "target": "Vegetables (Organic)", "value": 1.42824499436793e-05},
                {"source": "Resource depletion", "target": "Hazelnuts (Organic)", "value": 0},
                {"source": "Resource depletion", "target": "Cocoa mass (Organic)", "value": 0},
                {"source": "Resource depletion", "target": "Cocoa butter (Organic)", "value": 0},
                {"source": "Environment", "target": "Refrigeration", "value": 0},
                {"source": "Environment", "target": "Packaging", "value": 0},
                {"source": "Total", "target": "Human rights", "value": 0.307574096993239},
                {"source": "Human rights", "target": "Child labour", "value": 0.0410641202645833},
                {"source": "Child labour", "target": "Hazelnuts (Organic)", "value": 0.0105339381639722},
                {"source": "Child labour", "target": "Cocoa mass (Organic)", "value": 0.0105},
                {"source": "Child labour", "target": "Cocoa butter (Organic)", "value": 0.0087294420777},
                {"source": "Child labour", "target": "Coconut oil (Organic)", "value": 0.00474399974233333},
                {"source": "Child labour", "target": "Cane sugar (Organic)", "value": 0.00388226450884445},
                {"source": "Child labour", "target": "Vegetables (Organic)", "value": 0.00267447577173333},
                {"source": "Human rights", "target": "Forced labour", "value": 0.0365458590642445},
                {"source": "Forced labour", "target": "Hazelnuts (Organic)", "value": 0.0114913076376389},
                {"source": "Forced labour", "target": "Cocoa butter (Organic)", "value": 0.0081134807347},
                {"source": "Forced labour", "target": "Cocoa mass (Organic)", "value": 0.00765230236575},
                {"source": "Forced labour", "target": "Cane sugar (Organic)", "value": 0.004},
                {"source": "Forced labour", "target": "Vegetables (Organic)", "value": 0.00296668823626667},
                {"source": "Forced labour", "target": "Coconut oil (Organic)", "value": 0.00232208008988889},
                {"source": "Human rights", "target": "Health safety", "value": 0.0345435327843611},
                {"source": "Health safety", "target": "Hazelnuts (Organic)", "value": 0.0121419536385},
                {"source": "Health safety", "target": "Cocoa mass (Organic)", "value": 0.00766772850678333},
                {"source": "Health safety", "target": "Cocoa butter (Organic)", "value": 0.0056245892061},
                {"source": "Health safety", "target": "Coconut oil (Organic)", "value": 0.00361616847688889},
                {"source": "Health safety", "target": "Cane sugar (Organic)", "value": 0.00277374682533333},
                {"source": "Health safety", "target": "Vegetables (Organic)", "value": 0.00271934613075556},
                {"source": "Human rights", "target": "Access to water", "value": 0.0340206659360667},
                {"source": "Access to water", "target": "Cocoa mass (Organic)", "value": 0.0105},
                {"source": "Access to water", "target": "Cocoa butter (Organic)", "value": 0.0089274160792},
                {"source": "Access to water", "target": "Hazelnuts (Organic)", "value": 0.0054148022845},
                {"source": "Access to water", "target": "Cane sugar (Organic)", "value": 0.00333938149786667},
                {"source": "Access to water", "target": "Vegetables (Organic)", "value": 0.00314663377488889},
                {"source": "Access to water", "target": "Coconut oil (Organic)", "value": 0.00269243229961111},
                {"source": "Human rights", "target": "Freedom of association", "value": 0.0320571523941667},
                {"source": "Freedom of association", "target": "Hazelnuts (Organic)", "value": 0.0132312483463611},
                {"source": "Freedom of association", "target": "Cocoa butter (Organic)", "value": 0.0077695200707},
                {"source": "Freedom of association", "target": "Cocoa mass (Organic)", "value": 0.00510606573995},
                {"source": "Freedom of association", "target": "Vegetables (Organic)", "value": 0.00354321156324444},
                {"source": "Freedom of association", "target": "Cane sugar (Organic)", "value": 0.00240710667391111},
                {"source": "Freedom of association", "target": "Coconut oil (Organic)", "value": 0},
                {"source": "Human rights", "target": "Access to land", "value": 0.0315022209894056},
                {"source": "Access to land", "target": "Hazelnuts (Organic)", "value": 0.00964970063322223},
                {"source": "Access to land", "target": "Cocoa mass (Organic)", "value": 0.00938530207965},
                {"source": "Access to land", "target": "Cocoa butter (Organic)", "value": 0.0060110791848},
                {"source": "Access to land", "target": "Cane sugar (Organic)", "value": 0.00380818314608889},
                {"source": "Access to land", "target": "Vegetables (Organic)", "value": 0.00264795594564445},
                {"source": "Access to land", "target": "Coconut oil (Organic)", "value": 0},
                {"source": "Human rights", "target": "Sufficient wage", "value": 0.0287776757227333},
                {"source": "Sufficient wage", "target": "Cocoa mass (Organic)", "value": 0.00883512456493333},
                {"source": "Sufficient wage", "target": "Cocoa butter (Organic)", "value": 0.0078343367268},
                {"source": "Sufficient wage", "target": "Coconut oil (Organic)", "value": 0.00347879026511111},
                {"source": "Sufficient wage", "target": "Hazelnuts (Organic)", "value": 0.00316254211388889},
                {"source": "Sufficient wage", "target": "Vegetables (Organic)", "value": 0.00281013722808889},
                {"source": "Sufficient wage", "target": "Cane sugar (Organic)", "value": 0.00265674482391111},
                {"source": "Human rights", "target": "Equal rights migrants", "value": 0.0271146645119444},
                {"source": "Equal rights migrants", "target": "Cocoa butter (Organic)", "value": 0.0071042315061},
                {"source": "Equal rights migrants", "target": "Cocoa mass (Organic)", "value": 0.00636673210005},
                {"source": "Equal rights migrants", "target": "Hazelnuts (Organic)", "value": 0.00601459775836111},
                {"source": "Equal rights migrants", "target": "Coconut oil (Organic)", "value": 0.00429185583138889},
                {"source": "Equal rights migrants", "target": "Cane sugar (Organic)", "value": 0.00182647471915556},
                {"source": "Equal rights migrants", "target": "Vegetables (Organic)", "value": 0.00151077259688889},
                {"source": "Human rights", "target": "Discrimination", "value": 0.0211217763359833},
                {"source": "Discrimination", "target": "Cocoa mass (Organic)", "value": 0.00609671700306667},
                {"source": "Discrimination", "target": "Cocoa butter (Organic)", "value": 0.0047738806325},
                {"source": "Discrimination", "target": "Coconut oil (Organic)", "value": 0.00368119084494444},
                {"source": "Discrimination", "target": "Vegetables (Organic)", "value": 0.00286009813604444},
                {"source": "Discrimination", "target": "Cane sugar (Organic)", "value": 0.00283706180951111},
                {"source": "Discrimination", "target": "Hazelnuts (Organic)", "value": 0.000872827909916666},
                {"source": "Human rights", "target": "Working hours", "value": 0.02082642898975},
                {"source": "Working hours", "target": "Hazelnuts (Organic)", "value": 0.0107216773848333},
                {"source": "Working hours", "target": "Coconut oil (Organic)", "value": 0.00359009052944444},
                {"source": "Working hours", "target": "Vegetables (Organic)", "value": 0.00212300379075556},
                {"source": "Working hours", "target": "Cocoa butter (Organic)", "value": 0.0018518584356},
                {"source": "Working hours", "target": "Cocoa mass (Organic)", "value": 0.00158227069058333},
                {"source": "Working hours", "target": "Cane sugar (Organic)", "value": 0.000957528158533333}
            ]
        }
    ;
    let option1 = {
        title: {
            text: 'Sankey Diagram'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                draggable: false,                         //是否允许拖动
                type: 'sankey',
                data: data.nodes,
                links: data.links,
                //focusNodeAdjacency: 'allEdges',         //鼠标移入节点高亮交互
                itemStyle: {
                    borderWidth: 1,
                    borderColor: '#aaa'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.5
                }
            }
        ]
    };
    let myChart1 = echarts.init(document.getElementById('main-container'));
    myChart1.setOption(option1);
}

//测试树形原形图
function treeCricle() {
    var colors=[
        "#00ADD0",
        "#FFA12F",
        "#B62AFF",
        "#604BFF",
        "#6E35FF",
        "#002AFF",
        "#20C0F4",
        "#95F300",
        "#04FDB8",
        "#AF5AFF"
    ]
    var getdata=function getData() {
        let data = {
            name: "根节点1",
            value: 0,
            children: []
        };
        for (let i = 1; i <= 10; i++) {
            let obj = {
                name: "节点" + i,
                value: i,
                children: [],
            };
            for (let j = 1; j <= 5; j++) {
                let obj2 = {
                    name: `节点1-${i}-${j}`,
                    value: 1 + "-" + i + "-" + j,
                };
                if(j%2==1){
                    obj2.children=[]
                    for (let k = 1; k <= 3; k++) {
                        let obj3 = {
                            name: `节点1-${i}-${j}-${k}`,
                            value: 1 + "-" + i + "-" + j+'-'+k,
                        };
                        obj2.children.push(obj3);
                    }
                }

                obj.children.push(obj2);
            }

            data.children.push(obj);
        }
        let arr=[]
        arr.push(data)
        //
        arr=handle(arr,0)
        console.log(arr);
        return arr;
    }
    var handle=function handleData(data,index,color='#00f6ff'){
        //index标识第几层
        return data.map((item,index2)=>{
            //计算出颜色
            if(index==1){
                color = colors.find((item, eq) => eq == index2 % 10);
            }
            // 设置节点大小
            if(index===0 || index===1){
                item.label= {
                    position: "inside",
                    //   rotate: 0,
                    //   borderRadius: "50%",handle
                }
            }
            // 设置label大小
            switch(index){
                case 0:
                    item.symbolSize=70
                    break;
                case 1:
                    item.symbolSize=50
                    break;
                default:
                    item.symbolSize=10
                    break;
            }
            // 设置线条颜色
            item.lineStyle= { color: color }

            if (item.children) {//存在子节点
                item.itemStyle = {
                    borderColor: color,
                    color:color
                };
                item.children=handle(item.children,index+1,color)
            } else {//不存在
                item.itemStyle = {
                    color:'transparent',
                    borderColor: color
                };
            }
            return item
        })
    }
    let option2 = {
        type: "tree",
        backgroundColor: "#000",
        toolbox: { //工具栏
            show: true,
            iconStyle: {
                borderColor: "#03ceda"
            },
            feature: {
                restore: {}
            }
        },
        tooltip: {//提示框
            trigger: "item",
            triggerOn: "mousemove",
            backgroundColor: "rgba(1,70,86,1)",
            borderColor: "rgba(0,246,255,1)",
            borderWidth: 0.5,
            textStyle: {
                fontSize: 10
            }
        },
        series: [
            {
                type: "tree",
                hoverAnimation: true, //hover样式
                data:getdata(),
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                layout: "radial",
                symbol: "circle",
                symbolSize: 10,
                nodePadding: 20,
                animationDurationUpdate: 750,
                expandAndCollapse: true, //子树折叠和展开的交互，默认打开
                initialTreeDepth: 2,
                roam: true, //是否开启鼠标缩放和平移漫游。scale/move/true
                focusNodeAdjacency: true,
                itemStyle: {
                    borderWidth: 1,
                },
                label: { //标签样式
                    color: "#fff",
                    fontSize: 10,
                    fontFamily: "SourceHanSansCN",
                    position: "inside",
                    rotate: 0,
                },
                lineStyle: {
                    width: 1,
                    curveness:0.5,
                }
            }
        ]
    };

    let myChart1 = echarts.init(document.getElementById('main-containerCricle'));
    myChart1.setOption(option2);
}

window.onload = function () {
    sanTest();
    treeCricle();
};

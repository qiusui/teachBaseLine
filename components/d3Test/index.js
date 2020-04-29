//测试d3.js

let init = {
    //测试d3.js基本写法
    test1: function () {
        d3.select("#chart1")                   //select：选择获取节点；selectAll也是类似这功能
            .selectAll("circle")
            .data([100])                      //data：用于数据的绑定
            .enter()                          //enter 操作用来添加新的 DOM 元素，exit 操作用来移除多余的 DOM 元素
            .append("circle")                 //jquery下的append类似，用于插入文本  例如$("ol").append("<li>插入项</li>");
            .attr("r", 10)      //jquery下的attr类似，$("img").attr("width","500");  这里r是半径属性
            .attr("cy", 100)    //svg cy属性：y轴
            .attr("cx", d => d);//svg cx属性：x轴       这里用到了箭头函数的简写

        const array = new Array();
        for (let i = 1; i < 6; i++) {
            array.push(i * 100);
        }
        d3.select('#chart2')
            .selectAll('circle').data(array).enter().append('circle')
            .attr('r', 10).attr('cy', 100).attr('cx', d => d);

        const ctnArray = [10, 20, 30, 40, 50];
        d3.select('#chart3')
            .selectAll('circle').data(ctnArray).enter().append('circle')
            .attr('r', d => d).attr('cy', 100).attr('cx', d => d * 10).style("fill", "red");

    },
    //testTree：测试树形结构的编写以及大概对应的d3.js的写法


};

window.onload = function () {
    init.test1();
};

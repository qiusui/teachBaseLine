let init = function () {
    ajax({
        url: './inform',
        type: 'get',
        success: function (response, xml) {
            document.getElementById('myDiv').innerText = response;
        },
        fail: function (status) {
        }
    });
};

window.onload = function () {
    //获取css
    this.init();
};

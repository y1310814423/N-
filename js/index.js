window.onload = function () {
    var luoboMain = document.getElementsByClassName("luoboMain")[0];

    var btnRt = document.getElementsByClassName("btn_rt")[0];
    var btnLt = document.getElementsByClassName("btn_lt")[0];
    // 获取第一个子节点
    function getFirstChild(obj) {
        return obj.children[0];
    }

    //获取最后一个子节点
    function getLastChild(obj) {
        return obj.children[(obj.children.length) - 1];
    }

    //点击右按钮执行的函数
    function right() {
        animate(luoboMain, {left: -70}, function () {
            var fir = getFirstChild(this);
            this.appendChild(fir);
            this.style.left = 0;
        })
    }

    //点击左按钮执行的函数
    function left() {
        var fir = getFirstChild(luoboMain);
        var last = getLastChild(luoboMain);
        luoboMain.insertBefore(last, fir);
        luoboMain.style.left = "-70px";
        animate(luoboMain, {left: 0});
    }

    //右按钮监听的事件
    btnRt.addEventListener("click", function () {
        right();
    }, false);
    //左按钮监听的事件
    btnLt.addEventListener("click", function () {
        left();
    }, false)


    var button = document.getElementsByClassName('button')[0];
    var choose = document.getElementsByClassName('choose')[0];
    var falg = true;
    button.addEventListener('click', function () {
        if (falg == true) {
            choose.style.height = '80px';
            choose.style.padding = '20px 0';
            falg = false;
        } else {
            choose.style.height = '0';
            choose.style.padding = '0';
            falg = true;
        }
    }, false)
};

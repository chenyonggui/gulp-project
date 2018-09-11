//先加载config配置文件
require(["../../js/config"], function(){
    //先加载jquery这个模块，再执行回调函数
    require(["jquery", "framework"], function($, frame){
        $()
        console.log('loading login.js ');

        new Sw();
    })
})



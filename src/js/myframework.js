// let $ = require("jquery");
// module.exports = {
//     print:function(){
//         $.each();
//     }
// }

// import $ from "jquery";
// export default {
//     print : function(){
//         $.each();
//     }
// }

define(["jquery"], function($){
    return {
        print : function(){
            $.each();
        }
    }
})
    
// $(".box").animate({left:100}, function(){})
// $("#box").draggable({
//     x : true,
//     y : false
// });
// $.ajax({
//     type : "jsop",
//     url : "xxxxxxxx?q=3&p=3",
//     jsonp : "cb",
//     success : function(data){
//         console.log(data);
//     }
// });



// $("#box")
// $(".container")
// $("div")

// $("#box[xx] ")
// $(".xx[prop=123]")
// $("div[name=xx]")


/**
 * draggbale 拖拽元素
 * 1.0版本
 * 使用方式：
 * draggable(ele, {
 *          x : false, //表示水平方向是否可拖拽
 *          y : true, //表示垂直方向是否可拖拽
 *          limit : true, //表示活动范围是否限制在定位父元素内
 *          paddingLeft : 0,  //增加填充，即进一步缩小活动范围
            paddingRight :0,  //增加填充，即进一步缩小活动范围
            paddingTop : 0,  //增加填充，即进一步缩小活动范围
            paddingBottom  : 0,  //增加填充，即进一步缩小活动范围
            maringLeft : 0, //设置margin值，可以消除由于margin带来的拖拽误差，不填则可能会受影响
            marginTop : 0, //设置margin值，可以消除由于margin带来的拖拽误差，不填则可能会受影响
            callback : function(section, distance){
                  回调函数，在拖拽过程中不断触发
                  两个参数分别为：拖拽元素的可活动范围大小，拖拽元素在可活动范围内的坐标
                  section包括，minLeft\maxLeft\minTop\maxTop
                  distance包括, x\y
                  绑定了this，回调函数中可以直接使用this来指向拖拽元素ele本身
            }
 * })
 * */


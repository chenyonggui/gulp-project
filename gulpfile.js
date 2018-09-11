
let gulp = require("gulp");  //引入gulp模块
let minifyJS = require("gulp-babel-minify");  //引入编译压缩JS模块
let minifyCSS = require("gulp-clean-css");    //引入压缩CSS模块
let connect = require("gulp-connect");

//定义一个名字叫做【build】的任务
gulp.task("build", ()=>{
    //压缩jS
    gulp.src("./src/**/*.js") //读取文件
        .pipe(minifyJS()) //编译压缩处理
        .pipe(gulp.dest("./dist")) //生成到指定目录
    //复制HTML
    gulp.src("./src/**/*.html")  //读取文件
        .pipe(gulp.dest("./dist"))  //生成到指定目录
    //压缩CSS
    gulp.src("./src/**/*.css") //读取文件
        .pipe(minifyCSS())  //压缩处理
        .pipe(gulp.dest("./dist"))  //生成到指定目录
});

gulp.task("refreshHTML", ()=>{
    gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"))        
        .pipe(connect.reload());
})

gulp.task("refreshCSS", ()=>{
    gulp.src("./src/**/*.css")
        .pipe(minifyCSS())
        .pipe(gulp.dest("./dist"))        
})

gulp.task("refreshJS", ()=>{
    gulp.src("./src/**/*.js")
        .pipe(minifyJS())
        .pipe(gulp.dest("./dist"))        
})

gulp.task("server", ()=>{
    //创建一个服务器
    connect.server({
        root : "dist", //指定服务器根目录在哪
        port : 8080, 
        livereload : true  //服务器是否可以热部署（即时刷新）
    })

    //监听所有文件的变化， 执行相应的任务
    gulp.watch("./src/**/*.html", ["refreshHTML"]);
    gulp.watch("./src/**/*.css", ["refreshCSS", "refreshHTML"]);
    gulp.watch("./src/**/*.js", ["refreshJS","refreshHTML"]);
})


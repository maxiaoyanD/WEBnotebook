module.exports = function(grunt){
    //配置信息
    grunt.initConfig({
        htmlmin:{
            options:{
                removeComments:true,
                collapseWhitespace:true
            },
            files:{
                src:'./index.html',
                dest:'dist/index.html'
            }
        },
        cssmin:{
            'dist/notebook.css':'notebook.css'
        },
        uglify:{
            'dist/notebook.js':'notebook.js',
            'dist/list.js':'list.js'
         }
                
    });
    //加载插件
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //任务清单
    // default是一个构建任务
    grunt.registerTask('default',['htmlmin','cssmin','uglify']);
}
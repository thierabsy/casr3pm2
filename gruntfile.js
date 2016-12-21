// IN THE HTML : <script src="http://localhost:32729/livereload.js"></script>



module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.initConfig({
        uglify:{
            my_target:{
                files: {
                    'path destination' : ['src path /*.js']
                } //files
            } //my_target
        }, //uglify
        compass:{
            dev:{
                options: {
                    config : 'config.rb'
                } //options
            } //dev
        }, //compass
        watch:{
           options: { livereload: true},
           scripts: {
               files: ['src path /*.js'],
              tasks: ['uglify']
           }, //scripts
           scripts: {
               files: ['src path /*.scss'],
              tasks: ['compass:dev']
           }, //sass
           scripts: {
               files: ['src path /*.html']
           } //scripts
        } //watch
    }) //initConfig
    grunt.registerTask('default', 'watch');
} //exports
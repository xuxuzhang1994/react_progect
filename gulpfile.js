var gulp = require('gulp');
var path = require('path');
var yargs = require('yargs');
var rename = require('gulp-rename');
var template = require('gulp-template');
console.log(__dirname)
let resolveToComponents = (glob = '') => {
    return path.join(__dirname,'src/pages', glob); // app/components/{glob}
};
let paths = {
    blankLazyTemplates: path.join(__dirname, 'generator', 'lazy-component/**/*.**')
};
gulp.task('default', function() {
    // 将你的默认的任务代码放在这
});
gulp.task('component:lazy', () => {
    const cap = (val) => {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };
    const calModulePath = (path) => {
        path = path.replace(/\./g, "/");
        path = path.replace(/\/+/g, "/");
        path = path.charAt(0) === '/' ? path.substring(1) : path;
        path = path.charAt(path.length - 1) === '/' ? path.substring(0, path.length - 1) : path;
        return path === '' ? path : '/' + path;
    };
    console.log(yargs.argv)

    const componentInfo = yargs.argv.component.split(':');
    const name = componentInfo[0];
    const parentPath = (componentInfo.length > 1 && componentInfo[1]) || '';
    const fileName = name.replace(/([A-Z])/g, "-$1").toLowerCase();
    const destPath = path.join(resolveToComponents(), parentPath, fileName);

    const nameOk = name.replace(/-(\w)/g, function (all, letter) {
        return letter.toUpperCase();
    });

    return gulp.src(paths.blankLazyTemplates)
        .pipe(template({
            name: nameOk,
            fileName: fileName,
            upCaseName: cap(nameOk),
            parentPath: parentPath,
            modulePath: calModulePath(parentPath)
        }))
        .pipe(rename((path) => {
            path.basename = path.basename.replace('temp', fileName);
        }))
        .pipe(gulp.dest(destPath));
});
const {src, dest, watch} = require ("gulp");
const sass = require("gulp-sass")(require ("sas"));

function css(done) {
    //identificar el archivo SASS
    //Compilarlo
    //Almacenarla en el disco duro

    src ("src/scss/app.scss")
    .pipe( sass())
    .pipe (dest("build/css"))

  done(); // callback que avisa a gulp cuando llegamos al final de la funcion
}

function dev(done) {
    watch("src/scss/app.scss", css)

    done();
}

exports.css = css;
exports.dev = dev;

const gulp = require('gulp');
const gutil = require( 'gulp-util' );
const ftp = require( 'vinyl-ftp' );

const conf = require('../conf/gulp.conf');

gulp.task('deploy', deploy_fn);

function deploy_fn() {
  var conn = ftp.create({
    host: conf.credentials.ftp.host,
    user: conf.credentials.ftp.user,
    pass: conf.credentials.ftp.pass,
    log: gutil.log,
  });

  var globs = [
    conf.path.src('**'),
    conf.path.src('**/.htaccess'),
  ];

  console.log(globs);

  return gulp.src(
      globs, {
        base: 'src/.',
        buffer: false
      })
    .pipe( conn.dest( '/' ) );
}

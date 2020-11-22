const setCookie = function (res, path, stat) {
  if (res.req.newToken){
    res.set(
      'Set-Cookie',
      'token='+res.req.newToken+';httpOnly;MaxAge='+process.env.COOKIE_MAX_AGE+';Path=/'
    );
  }
}

module.exports = setCookie;

const setCookie = function (res, path, stat) {
  if (res.req.newToken){
    res.set(
      'Set-Cookie',
      'token='+res.req.newToken+';httpOnly;Max-Age='+process.env.COOKIE_MAX_AGE+';SameSite=Strict;Path=/'
    );
  }
}

module.exports = setCookie;

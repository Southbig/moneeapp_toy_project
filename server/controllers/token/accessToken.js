require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '2d' });
  },

  sendAccessToken: (res, accessToken) => {
    console.log('accessToken', accessToken)
    return res
      .status(200)
      .cookie('jwt', accessToken)
      .json({ data: { accessToken }, message: 'OK' });
  },

  isAuthorized: (req) => {

    const cookie = req.headers.cookie;
    console.log('cookie 🚌', cookie)
    if (!cookie) {
      return null;
    } else {
      const token = cookie.split(" ")[0]
      // console.log('token 🏀', token)
      const tokenSlice = token.slice(4, token.length)
      // console.log('tokenSlice 🏀', tokenSlice)
      const data = verify(tokenSlice, process.env.ACCESS_SECRET);
      // console.log('data 🏀', data)

      if (!data) {
        return null
      } else {
        return data;
      }
    }
  }
};
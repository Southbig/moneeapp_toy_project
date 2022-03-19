const { Users } = require('../../models');
const { isAuthorized } = require('../token/accessToken');

module.exports = (req, res) => {
  // 마이페이지 정보 불러오기
  const accessTokenData = isAuthorized(req);
  console.log('accessTokenData', accessTokenData)
  if (!accessTokenData) {
    res.status(401).send({ data: null, message: '유효하지 않은 토큰입니다.' });
  }
  else {
    Users.findOne({ where: { email: accessTokenData.email } })
      .then((data) => {
        // console.log('유저인포', data)
        delete data.dataValues.password;
        res.status(201).json({ data: { data: data.dataValues }, message: '회원정보 조회에 성공했습니다' })
      }).catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Server Error' });
      });
  }
}
const { Users, Posts, Posts_comments } = require('../../models');
const { isAuthorized } = require('../token/accessToken');

module.exports = async (req, res) => {

  const { message } = req.body;

  const accessTokenData = isAuthorized(req);

  const email = accessTokenData.email;
  const user_id = accessTokenData.id;
  const total_comments = 0;



  if (!accessTokenData) {
    res.status(401).send({ data: null, message: '유효하지 않은 토큰입니다.' });
  } else {
    Posts.create({ user_id, email, message, total_comments })
      .then((data) => {
        if (data) {
          res.status(201).send({ data: { email, message, total_comments }, message: '글 등록에 성공했습니다.' })
        }
        else res.status(401).json({ message: "요청이 잘못되었습니다." })
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Server Error' });
      });
  }


  // const postData = Posts.findAll({
  //   attributes: [
  //     "user_id"
  //   ],
  //   include: [{ model: Users, attributes: ['email'] }],
  //   order: [['createdAt', 'DESC']]
  // })



  // console.log(postData)

  // postData.then(data => console.log('data', data))

  // console.log('postData', postData)
}
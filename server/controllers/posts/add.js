const { Users, Posts } = require('../../models')
const { isAuthorized } = require('../token/accessToken');

module.exports = async (req, res) => {
  // const user_id = req.cooikes.id;
  // console.log('req', req.body)
  const { message } = req.body;
  // console.log('user_id', user_id)
  // console.log('message', message)

  // console.log('userId', req.params)
  // console.log("Users", Users.email)

  const accessTokenData = isAuthorized(req);

  const email = accessTokenData.email
  const user_id = accessTokenData.id


  if (!accessTokenData) {
    res.status(401).send({ data: null, message: '유효하지 않은 토큰입니다.' });
  } else {
    Posts.create({ user_id, message })
      .then((data) => {
        if (data) {
          res.status(201).send({ data: { email, message }, message: '글 등록에 성공했습니다.' })
        }
        else res.status(401).json({ message: "요청이 잘못되었습니다." })
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Server Error' });
      });
  }

  // }

  // const postData = Posts.findAll({
  //   where: { user_id },
  //   include: [{ model: Users, attributes: ['email'] }],
  //   order: [['createdAt', 'DESC']]
  // })

  // postData.then(data => console.log('data', data.Users.dataValues))

  // console.log('postData', postData)
}
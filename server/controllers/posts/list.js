// 글 조회하기
const { Users, Posts } = require('../../models');

module.exports = async (req, res) => {
  try {
    const postsData = await Posts.findAll({
      attributes: [
        "id",
        "user_id",
        "message",
        "total_comments",
      ],
      include: [
        { model: Users, attributes: ["id"] }
      ]
    })
    console.log('postsData', postsData)
    let postsList = postsData.map(el => {
      return {
        "id": el.id,
        "user_id": el.user_id,
        "message": el.message,
        "total_comments": el.total_comments
      }
    })
    return res.status(200).json({ data: postsList, message: "successfully posts show all" })
  }
  catch (err) {
    return res.status(500).json({ data: null, message: "server error" })
  }
}
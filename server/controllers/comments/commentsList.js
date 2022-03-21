const { Users, Posts, Posts_comments } = require('../../models');

module.exports = async (req, res) => {

  try {
    const postsCommentsData = await Posts_comments.findAll({
      attributes: [
        "id",
        "user_id",
        "post_id",
        "comment",
      ],
    })

    let postsCommentsList = postsCommentsData.map(el => {

      return {
        "id": el.id,
        "user_id": el.user_id,
        "post_id": el.post_id,
        "comment": el.comment,
      }
    })
    console.log('postsCommentsList', postsCommentsList)
    return res.status(200).json({ data: postsCommentsList, message: "successfully posts show all" })
  }
  catch (err) {
    return res.status(500).json({ data: null, message: "server error" })
  }
}

import axios from "axios";

async function deletePost(id, auth) {
  await axios
    .delete(`http://localhost:3005/api/posts/delete/id/${id}`, auth)
    .then(async (res) => {
      res.json({ response: res });
    })
    .catch((error) => {});
}

export default deletePost;

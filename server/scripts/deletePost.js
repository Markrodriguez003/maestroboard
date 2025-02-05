import axios from "axios";

async function deletePost(props) {
  await axios
    .delete(`http://localhost:3005/api/delete/post/id/${props}`)
    .then(async (res) => {
      res.json({ response: res });
    })
    .catch((error) => {});
}

export default deletePost;

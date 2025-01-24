import axios from "axios";

async function deleteArticle(props) {
  await axios
    .delete(`http://localhost:3005/api/delete/article/id/${props}`)
    .then(async (res) => {
      res.json({ response: res });
    })
    .catch((error) => {});
}

export default deleteArticle;

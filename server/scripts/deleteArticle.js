import axios from "axios";

async function deleteArticle(id, auth) {
 
  await axios
    .delete(`http://localhost:3005/api/articles/delete/id/${id}`, auth)
    .then(async (res) => {
      res.json({ response: res });
    })
    .catch((error) => {});
}

export default deleteArticle;

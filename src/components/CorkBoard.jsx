import { useState, useEffect } from "react";
import "./css/Corkboard.css";
import axios from "axios";
import BoardPostModal from "./BoardPostModal";
import PostBoardCard from "./PostBoardCard";

import { Container } from "react-bootstrap";

function Corkboard() {
  // CAROUSEL STATE FUNCTION

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [posts, setPosts] = useState([{}]);

  {/* ********************************************************************** */ }
  {/* GRABS POSTS FROM BACK-END*/ }
  {/* ********************************************************************** */ }
  useEffect(() => {
    async function grabPosts() {
      axios
        .get("http://localhost:3005/api/loadPosts")
        .then((response) => {
          setPosts(response);
        })
        .catch((err) => console.log(err));
      // console.log(`Post Data: ${JSON.stringify(posts.data)} `); // GIVES ME ALL & INDIVIDUAL DB POSTS DATA !!

    }
    grabPosts();
  }, []);



  return (
    <div>
      <div>
        {/* ********************************************************************** */}
        {/* CORKBOARD HEADER */}
        {/* ********************************************************************** */}
        <Container className="shadow-md">
          <h4 className="display-4 corkBoard-title ">
            Community Board <br />
            <span className="lead">
              Search or post all your music needs here!
            </span>
          </h4>
        </Container>
        {/* ************************ */}
        {/* FILTER - SEARCH BUTTONS */}
        {/* ************************ */}
        <BoardPostModal />
      </div>

      {/* ********************************************************************** */}
      {/* CORKBOARD + POST CARDS*/}
      {/* ********************************************************************** */}

      <div className="corkboard-card-container shadow-lg ">
        {posts.data?.map((p, i) => (
          <PostBoardCard
            key={`post-${p.title} - ${i}`}
            title={p.title}
            email={p.email}
            username={p.username}
            price={p.price}
            zip={p.zip}
            trade={p.trade}
            type={p.type}
            equipment={p.equipment}
            date={p.date}
            phone={p.phone}
            body={p.body}
          />

        ))}
      </div>
    </div>
  );
}

export default Corkboard;

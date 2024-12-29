import React, { useState, useEffect } from "react";
import "./css/Corkboard.css";
import PostBoardCard from "./PostBoardCard";
import BoardPostModal from "./BoardPostModal";
// import CardReplyModal from "./CardReplyModal";
import { Container } from "react-bootstrap";
function Corkboard() {
  // CAROUSEL STATE FUNCTION

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [posts, setPosts] = useState([{}]);

  useEffect(() => {
    async function grabPosts() {
      let response = await fetch("/api/loadPosts");
      let postData = await response.json();
      // console.log("Post Data: " + JSON.stringify(postData)); // GIVES ME ALL & INDIVIDUAL DB POSTS DATA !!
      setPosts(postData);
    }
    grabPosts();
  }, []);

  // console.log("Posts[0] ===>" + testPost[0].title );
  // console.log("Posts[0] ===>" + JSON.stringify(testPost[0]) );

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
        {posts.map((p, i) => (
          <PostBoardCard
            key={0}
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

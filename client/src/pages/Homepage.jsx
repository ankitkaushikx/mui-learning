import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts/")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log("---All Posts Error Client", error);
      });
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post, index) => {
          return (
            <>
              <div>
                <p>{post.title}</p>
                <p>{post.content}</p>
              </div>
              <hr />
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Home;

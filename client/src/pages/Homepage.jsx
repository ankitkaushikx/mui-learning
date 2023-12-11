import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [allPosts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((error) => {
        console.log("---All Posts Error Client", error);
      });
  }, []);

  return (
    <>
      <h1>Home</h1>
      <ul>
        {allPosts.map((post, index) => {
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

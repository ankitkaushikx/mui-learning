import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import styled from "@emotion/styled";
function Home() {
  const [allPosts, setPosts] = useState([]);

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
  }, []);

  const BlueButton = styled(Button)(({ theme }) => ({
    color: "#00f",
    "&:hover": {
      backgroundColor: "#000",
    },
    "&:disabled": {
      backgroundColor: "#999",
      color: "white",
    },
  }));
  return (
    <>
      <h1>
        <HomeIcon />
        Home
      </h1>
      <ul>
        {allPosts.map((post, index) => {
          return (
            <>
              <Button variant="contained" size="small" color="primary" startIcon={<AutoStoriesIcon />}>
                Contained
              </Button>
              <BlueButton>BlueButton</BlueButton>
              <div id="index">
                <p>{post.title}</p>
                <Typography variant="h1" component="h2">
                  H1 heading P tag
                </Typography>
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

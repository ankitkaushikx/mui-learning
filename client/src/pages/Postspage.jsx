import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return (
    <>
      <h1>Posts</h1>
      <h1>{id}</h1>
    </>
  );
}

export default Post;

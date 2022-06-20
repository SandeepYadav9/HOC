import React from "react";
import EnhancsComments from "./CommitCount";
import EnhancsLikes from "./LikeCount";

const Count = () => {
  return (
    <div>
      <h1>Higher Order Componnets</h1>
      <EnhancsLikes/>
      <EnhancsComments/>
    </div>
  );
};

export default Count;

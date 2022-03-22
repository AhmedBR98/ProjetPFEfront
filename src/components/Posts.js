import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState } from "react";

const Post =()=> {

  
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            /> */}
            <span className="postUsername">
              {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
            </span>
            <span className="postDate">Time</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Content</span>
          {/* <img className="postImg" src={post.photo} alt="" /> */}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png"  alt="" />
            <img className="likeIcon" src="assets/heart.png"  alt="" />
            <span className="postLikeCounter"> people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post
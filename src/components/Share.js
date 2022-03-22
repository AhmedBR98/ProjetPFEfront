import React from "react";
import "./Share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import {ReactComponent as Profilepic} from 'C:/Users/AhmedBR/Desktop/React proj/pfe-project/src/components/assets/User.svg';


const imagesize={
  width: 50,
  height: 50,
  borderradius: '50%',
  objectfit: 'cover',
  cursor: 'pointer',}

export default function Share() {
  return (
      

    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
        <Profilepic style={imagesize}/>
          <input
            placeholder="What's in your mind ?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
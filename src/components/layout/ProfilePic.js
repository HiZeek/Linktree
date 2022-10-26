import React, { useState } from "react";
import ProfilePics from "../assets/profileimg.png";
import Camera from "../assets/camera.png";
import ShareBtn from "../assets/share.png";
import "./ProfilePic.css";

const ProfilePic = () => {
  const [click, setClick] = useState(false);
  return (
    <section className="profile">
      <div className="profile-pic">
        <div className="profile-pic-container">
          <div className="profile-bg"></div>
          <img src={ProfilePics} alt="profile-Pic" id="profile__img" />
          <img src={Camera} alt="camera" className="profile-camera" />
        </div>
        <p id="twitter">HiZeek.js</p>
        <p id="slack">HiZeek</p>
      </div>
      <div className="profile-share-container" onClick={() => setClick(!click)}>
        <img src={ShareBtn} alt="share profile" className="profile-share" />
        {click && <div className="share-border"></div>}
      </div>
    </section>
  );
};

export default ProfilePic;

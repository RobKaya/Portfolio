import "./Profile.css";
import React from "react";
import profileImage from "./profileimg.jpeg";
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile-header">
      <div className="header-content">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1 className="name">Robert Kaya</h1>
        <p className="job-title">AWS Cloud Developer</p>
        <div className="social-icons">
          <a href="https://twitter.com/robertkaya">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/robertkaya">
            <FaInstagram />
          </a>
          <a href="https://github.com/robkay">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/robert-kaya-213247245/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;

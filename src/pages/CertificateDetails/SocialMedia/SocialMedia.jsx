/* eslint-disable react/prop-types */
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import IconFacebook from "../../../assets/Facebook logo.png";
import TwitterIcon from "../../../assets/TwitterIcon.png";
import LinkedInIcon from "../../../assets/LinkedInIcon.png";
import "./SocialMedia.css";

function SocialMedia(props) {
  const { file, title, status } = props;
  const shareURL = file;

  return (
    <div className="social-share">
      <h3 className="information-label">Share</h3>
      <FacebookShareButton url={shareURL} quote={`${title}, ${status}`}>
        <img
          className="icon-social-facebook"
          src={IconFacebook}
          alt="IconFacebook"
        />
      </FacebookShareButton>
      <TwitterShareButton url={shareURL} title={`${title}, ${status}`}>
        <img
          className="icon-social-twitter"
          src={TwitterIcon}
          alt="TwitterIcon"
        />
      </TwitterShareButton>
      <LinkedinShareButton url={shareURL} title={title} summary={status}>
        <img
          className="icon-social-linkedin"
          src={LinkedInIcon}
          alt="LinkedInIcon"
        />
      </LinkedinShareButton>
    </div>
  );
}

export default SocialMedia;

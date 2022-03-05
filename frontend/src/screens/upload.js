import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./upload.css";

const Upload = ({ link, actions }) => {
  const [copyMessage, setCopyMessage] = useState(false);
  const imageLink = link;

  useEffect(() => {
    actions.postFile();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(imageLink);
    setCopyMessage(true);
    const wait = setTimeout(() => {
      setCopyMessage(false);
    }, 4000);
    return () => clearTimeout(wait);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="back">
          <FontAwesomeIcon
            onClick={() => {
              actions.setLoaded(false);
            }}
            className="icon-back"
            icon={faArrowLeft}
          />
        </div>
        <div className="check">
          <div className="icon"></div>
        </div>
      </div>
      <h2 className="title">Uploaded Successfully!</h2>
      <div
        className="upload-image"
        style={{ backgroundImage: `url("${imageLink}")` }}
      ></div>
      <div className="copy">
        <input type="text" value={imageLink} disabled />
        <button onClick={copyToClipboard}>
          {copyMessage ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
};

export default Upload;

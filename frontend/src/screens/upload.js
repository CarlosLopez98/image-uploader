import React from "react";
import { useState } from "react";
import "./upload.css";

const Upload = ({ link }) => {
  const [copyMessage, setCopyMessage] = useState(false);
  const imageLink = link;

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
      <div className="check">
        <div className="icon"></div>
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

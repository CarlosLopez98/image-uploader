import React from "react";
import { useDropzone } from "react-dropzone";
import image from "../resources/image.svg";
import "./main.css";

const Main = ({ actions }) => {
  const uploadFile = (file) => {
    actions.upload(
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
  };

  const onChoosed = (file) => {
    uploadFile(file.target.files[0]);
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    uploadFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: onDrop,
  });

  return (
    <div className="container">
      <h2 className="title">Upload your image</h2>
      <p className="subtitle">File should be Jpeg, Png...</p>
      <div className="upload" {...getRootProps()}>
        <input {...getInputProps()} />
        <img src={image} alt="illustration for upload" />
        <p className="info">Drag & Drop your image here</p>
      </div>
      <p className="or">or</p>
      <label htmlFor="file" className="btn-upload">
        Choose a file
      </label>
      <input
        id="file"
        name="file"
        type="file"
        accept="image/*"
        onChange={onChoosed}
        hidden
      />
    </div>
  );
};

export default Main;

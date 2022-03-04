import "./LoadingBar.css";

const LoadingBar = () => {
  return (
    <div className="loading-container">
      <h2 className="title">Uploading...</h2>
      <div className="bar">
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default LoadingBar;

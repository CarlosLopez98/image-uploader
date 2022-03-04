import image from "./resources/image.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h2 class="title">Upload your image</h2>
      <p class="subtitle">File should be Jpeg, Png...</p>
      <div className="upload">
        <img src={image} alt="illustration for upload" />
        <p class="info">Drag & Drop your image here</p>
      </div>
      <p class="or">or</p>
      <button class="btn-upload">Choose a file</button>
    </div>
  );
}

export default App;

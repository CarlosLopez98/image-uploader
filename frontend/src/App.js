import React, { useState, useEffect } from "react";
import Main from "./screens/main";
import Upload from "./screens/upload";
import LoadingBar from "./components/LoadingBar";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {}, []);

  const upload = () => {
    setUploading(true);
    // TODO: Upload image to Api
    const uploadWait = setTimeout(() => {
      setUploading(false);
      setLoaded(true);
    }, 4000);
    return () => clearTimeout(uploadWait);
  };

  if (uploading) {
    return <LoadingBar />;
  } else if (loaded) {
    return <Upload link={file.preview} />;
  } else {
    return <Main actions={{ upload, setFile }} />;
  }
}

export default App;

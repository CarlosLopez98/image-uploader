import React, { useState } from "react";
import Main from "./screens/main";
import Upload from "./screens/upload";
import LoadingBar from "./components/LoadingBar";
import "./App.css";

const API_URL = "http://localhost:3200/images";

function App() {
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const postFile = () => {
    const formData = new FormData();
    formData.append("file", file);

    fetch(API_URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setLink(data.path);
      })
      .catch((err) => console.error(err));
  };

  const upload = (selectFile) => {
    setFile(selectFile);
    setUploading(true);

    const uploadWait = setTimeout(() => {
      setUploading(false);
      setLoaded(true);
    }, 4000);

    return () => clearTimeout(uploadWait);
  };

  if (uploading) {
    return <LoadingBar />;
  } else if (loaded) {
    return <Upload link={link} actions={{ setLoaded, postFile }} />;
  } else {
    return <Main actions={{ upload }} />;
  }
}

export default App;

import "./App.css";
import { useState } from "react";
import { initializeApp } from "@firebase/app";

function App() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState(null);

  let firebase = initializeApp;

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    let file = image;
    let storage = firebase.storage();
    let storageRef = storage.ref();
    let uploadTask = storageRef.child("folder/" + file.name).put(file);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        let progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress({ progress });
      },
      (error) => {
        throw error;
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          setDownloadUrl({
            downloadURL: url,
          });
        });
        document.getElementById("file").value = null;
      }
    );
  };

  return (
    <div className="App">
      <div className="container">
        <h4>upload image</h4>
        <label>
          Choose file
          <input type="file" id="file" onChange={handleChange} />
        </label>

        {progress}
        <button className="button" onClick={handleUpload}>
          Upload
        </button>
        <img
          className="ref"
          src={downloadUrl || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
      </div>
    </div>
  );
}

export default App;

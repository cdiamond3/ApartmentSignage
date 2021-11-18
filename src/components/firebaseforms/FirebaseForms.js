import "./firebaseforms.css";
import { useState } from "react";
import { getStorage } from "firebase/storage";

function FirebaseForms() {
  const [image, setImage] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

 

  // const handleChange = (e) => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0]);
  //   }
  // };

  // const handleUpload = () => {
  //   const uploadTask = getStorage(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {},
  //     (error) => {
  //       console.lot(error);
  //     },
  //     () => {
  //       getStorage
  //         .ref("images")
  //         .child(image.name)
  //         .setDownloadUrl()
  //         .then((url) => {
  //           console.log(url);
  //         });
  //     }
  //   );
  // };

  return (
    <div className="App">
      <div className="container">
        <h1> Apartment Signage Creator </h1>

        <div className="labelsContainer">
          <input type="text" className="titleMaker" placeholder="Set Alert Type" />
          <input type="text" className="titleMaker" placeholder="Alert Heading " />
          <input type="file" className="fileSelector"  />
        </div>

        <img
          className="ref"
          src={ downloadUrl || "https://via.placeholder.com/920X1080"}
          alt="Uploaded Images"
          height="600"
          width="1000"
        />
        <button className="button">
          Upload
        </button>
        {/* {progress} */}
      </div>
    </div>
  );
}

export default FirebaseForms;

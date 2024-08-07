import React, { useState } from "react";
import Upload from "./Components/Upload";
import MemeEditor from "./Components/MemeEditor";
import Download from "./Components/Download";

const App = () => {
  const [image, setImage] = useState("");
  const [text, setText] = useState([]);

  const addText = () => {
    setText([...text, "New Text"]);
  };

  return (
    <div>
      <Upload setImage={setImage} />
      {image && (
        <div style={{ position: "relative", display: "inline-block" }}>
          <MemeEditor image={image} text={text} setText={setText} />
          <button onClick={addText}>Add Text</button>
          <Download image={image} />
        </div>
      )}
    </div>
  );
};

export default App;

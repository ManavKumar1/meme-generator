import React from "react";

const Upload = ({ setImage }) => {
  
  const handleFileChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <input type='file' onChange={handleFileChange} />
    </div>
  );
};

export default Upload;

import React, { useState } from "react";
import Draggable from "react-draggable";
import "./MemeEditor.css";

const MemeEditor = ({ image, text, setText, hideDeleteButton }) => {
  const handleTextChange = (index, event) => {
    const newText = [...text];
    newText[index] = event.target.value;
    setText(newText);
  };

  const handleDeleteText = (index) => {
    const newText = text.filter((_, i) => i !== index);
    setText(newText);
  };

  return (
    <div id='meme-container' className='meme-container'>
      <img src={image} alt='meme' className='meme-image' />
      {text.map((t, index) => (
        <Draggable key={index}>
          <div className='text-container'>
            <input
              type='text'
              value={t}
              onChange={(e) => handleTextChange(index, e)}
              className='meme-text'
              style={{
                top: `${10 + index * 30}px`,
                left: `10px`,
              }}
            />
            <button
              className={`delete-button ${hideDeleteButton ? "hidden" : ""}`}
              onClick={() => handleDeleteText(index)}
            >
              &times;
            </button>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default MemeEditor;

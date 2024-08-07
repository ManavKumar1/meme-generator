import React from "react";
import html2canvas from "html2canvas";

const Download = ({ image }) => {
  const handleDownload = async () => {
    const memeElement = document.getElementById("meme-container");

    if (!memeElement) return;

    // Temporarily hide delete buttons
    const deleteButtons = memeElement.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => (button.style.display = "none"));

    // Capture the screenshot
    const canvas = await html2canvas(memeElement, {
      useCORS: true,
      backgroundColor: null,
    });

    // Show delete buttons again
    deleteButtons.forEach((button) => (button.style.display = ""));

    // Create a link and download the image
    const link = document.createElement("a");
    link.download = "meme.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return <button onClick={handleDownload}>Download</button>;
};

export default Download;

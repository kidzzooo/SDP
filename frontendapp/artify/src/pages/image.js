import React, { useState } from 'react';
import axios from 'axios';

function ImageUploadForm() {
  const [image, setImage] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    const response = await axios.post('/upload', formData);
    console.log(response.data);
  };

  return (
    <form onSubmit={submitForm}>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploadForm;
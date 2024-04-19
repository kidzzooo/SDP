import React, { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import axios from "axios";
export default function ListItems() {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imagePath, setImagePath] = useState("");
    const [image, setImage] = useState(null);
    const handleImageChange = (event) => {
    setImage(event.target.files[0]);
    };
  
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Create a new FormData object to send form data including the file
      const formData = new FormData();
      formData.append('name', title);
      formData.append('price', parseFloat(price));
      formData.append('image', image); // Include the file object here
      formData.append('description', description);
      formData.append('category', category);

      // Send the form data to the server using Axios
      const response = await axios.post(
        "http://localhost:2014/listItems",
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Ensure proper content type for file uploads
          }
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
};


  useEffect(() => {
    // Get a reference to the file input element
    const fileInput = document.getElementById("fileInput");

    // Check if fileInput exists behtmlFore adding event listener
    if (fileInput) {
      // Define the previewImage function
      function previewImage(event) {
        const file = event.target.files[0];

        if (file) {
          const reader = new FileReader();

          reader.onload = function (e) {
            const imagePreview = document.getElementById("imagePreview");
            imagePreview.src = e.target.result;
            imagePreview.classList.remove("hidden");
          };

          reader.readAsDataURL(file);
        }
      }

      // Add an event listener htmlFor the change event
      fileInput.addEventListener("change", previewImage);

      // Clean up the event listener when the component unmounts
      return () => {
        fileInput.removeEventListener("change", previewImage);
      };
    }
  }, []);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      handleImageChange(event);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-20">
      {/* Left side with preview image */}
      <div className="w-1/2 flex flex-col items-center justify-center">
        <img
          id="imagePreview"
          className="hidden w-1/2 mt-4 pl-5"
          alt="Preview"
        />
      </div>
      {/* Right side with htmlForm content */}
      <div className="w-1/2 pl-4">
        <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
          <h4 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            List your Art Piece 🎨
          </h4>
          <form
            className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
            onSubmit={handleSubmit}
          >
            {/* Title */}
            <div className="flex flex-col gap-6 mb-1">
              <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Title
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  onChange={handleTitleChange}
                  value={title}
                  placeholder="The Starry Night"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="behtmlFore:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all behtmlFore:pointer-events-none behtmlFore:mt-[6.5px] behtmlFore:mr-1 behtmlFore:box-border behtmlFore:block behtmlFore:h-1.5 behtmlFore:w-2.5 behtmlFore:rounded-tl-md behtmlFore:border-t behtmlFore:border-l behtmlFore:border-blue-gray-200 behtmlFore:transition-all behtmlFore:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:behtmlFore:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:behtmlFore:border-t-2 peer-focus:behtmlFore:border-l-2 peer-focus:behtmlFore:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:behtmlFore:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
              </div>
              {/* Price */}
              <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Price (in INR)
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  onChange={handlePriceChange}
                  value={price}
                  placeholder="₹"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label className="behtmlFore:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all behtmlFore:pointer-events-none behtmlFore:mt-[6.5px] behtmlFore:mr-1 behtmlFore:box-border behtmlFore:block behtmlFore:h-1.5 behtmlFore:w-2.5 behtmlFore:rounded-tl-md behtmlFore:border-t behtmlFore:border-l behtmlFore:border-blue-gray-200 behtmlFore:transition-all behtmlFore:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:behtmlFore:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:behtmlFore:border-t-2 peer-focus:behtmlFore:border-l-2 peer-focus:behtmlFore:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:behtmlFore:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
              </div>
              {/* Description */}
              <div className="w-96">
                <div className="relative w-full min-w-[200px]">
                  <textarea
                    className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    value={description}
                    onChange={handleDescriptionChange}
                  ></textarea>
                  <label className="behtmlFore:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all behtmlFore:pointer-events-none behtmlFore:mt-[6.5px] behtmlFore:mr-1 behtmlFore:box-border behtmlFore:block behtmlFore:h-1.5 behtmlFore:w-2.5 behtmlFore:rounded-tl-md behtmlFore:border-t behtmlFore:border-l behtmlFore:border-blue-gray-200 behtmlFore:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:behtmlFore:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:behtmlFore:border-t-2 peer-focus:behtmlFore:border-l-2 peer-focus:behtmlFore:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:behtmlFore:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Description
                  </label>
                </div>
              </div>
              {/* Category */}
              <div className="w-96">
                <Select
                  label="Select Category"
                  onChange={(value) => setCategory(value)} // Update the category state when an option is selected
                  value={category} // Set the value of the Select component to the category state
                >
                  <Option value="painting">Painting</Option>
                  <Option value="photography">Photography</Option>
                  <Option value="sculpture">Sculpture</Option>
                </Select>
              </div>

              {/* Upload Image */}
              <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Upload Image
              </h6>
              <label
                htmlFor="fileInput"
                className="block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
              >
                {selectedFileName ? selectedFileName : "Choose File"}
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={handleFileSelect}
                />
              </label>
            </div>

            {/* List for Sale Button */}
            <button
              className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              List for Sale
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Create: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(`masukan namanya: ${inputText}`);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Input Template Name</h2>
        <div className="mb-4">
          <label htmlFor="textInput" className="block text-gray-700 font-medium mb-2">
            Masukan Nama Template 
          </label>
          <input
            type="text"
            id="textInput"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter text..."
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
        <Link to={'/admin/activity/detail/'}
          className="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleButtonClick}
        >
          Submit
        </Link>
      </div>
    </div>
  );
};

export default Create;

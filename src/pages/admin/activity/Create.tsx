import React, { useState } from 'react';

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
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Create;

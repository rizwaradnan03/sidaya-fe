import React, { useState } from "react";
import { createActivityTemplate } from "../../../api/ActivityTemplateApi";
import SweetAlert from "../../../components/SweetAlert";
import { useNavigate } from "react-router";

const Create: React.FC = () => {
  const [name, setInputName] = useState<string>("");

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createActivityTemplate({ name });

      if (response.status === 201) {
        SweetAlert({
          icon: "success",
          title: "Berhasil Membuat",
          text: "Selamat Anda Berhasil Membuat Activity Template!",
        });
        setTimeout(() => {
          navigate("/admin/activity-template");
        }, 2000);
      } else {
        SweetAlert({
          icon: "error",
          title: "Gagal Membuat",
          text: "Maaf Anda Gagal Membuat Activity Template!",
        });
      }
    } catch (error) {
      console.log("Error While Creating Activity Template ", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* <Card> */}
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          {/* <h2 className="text-2xl font-bold mb-4">Input Template Name</h2> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="textInput"
                className="block text-2xl font-bold mb-4"
              >
                <h2>Nama Template</h2>
                {/* Masukan Nama Template */}
              </label>
              <input
                type="text"
                id="textInput"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Nama"
                required
                value={name}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Tambah Template
            </button>
          </form>
        </div>
      {/* </Card> */}
    </div>
  );
};

export default Create;
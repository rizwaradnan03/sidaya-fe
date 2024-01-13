import React, { useEffect, useState } from "react";
import SweetAlert from "../../../components/SweetAlert";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import {
  createActivityDetail,
} from "../../../api/ActivityDetailApi";

const Create: React.FC = () => {
  const {activityTemplateId} = useParams()
  const [name, setInputName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const navigate = useNavigate();

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };
  const handleDescriptionInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleTimeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createActivityDetail({
        name,
        description,
        activityTemplateId,
        time,
      });

      if (response.status === 201) {
        SweetAlert({
          icon: "success",
          title: "Berhasil Membuat",
          text: "Selamat Anda Berhasil Membuat Activity Detail!",
        });
        setTimeout(() => {
          navigate("/admin/activity-detail");
        }, 2000);
      } else {
        SweetAlert({
          icon: "error",
          title: "Gagal Membuat",
          text: "Maaf Anda Gagal Membuat Activity Detail!",
        });
      }
    } catch (error) {
      console.log("Error While Creating Activity Detail ", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-25">
        {/* <Card> */}
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          {/* <h2 className="text-2xl font-bold mb-4">Input Template Name</h2> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="textInput"
                className="block text-2xl font-bold mb-4"
              >
                <h2>Nama</h2>
              </label>
              <input
                type="text"
                id="textInput"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Nama"
                required
                value={name}
                onChange={handleNameInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="textInput"
                className="block text-2xl font-bold mb-4"
              >
                <h2>Deskripsi</h2>
              </label>
              <input
                type="text"
                id="textInput"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Deskripsi"
                required
                value={description}
                onChange={handleDescriptionInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="textInput"
                className="block text-2xl font-bold mb-4"
              >
                <h2>Waktu</h2>
              </label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={time}
                onChange={handleTimeInputChange}
                required
              >
                <option value="00">00:00</option>
                <option value="01">01:00</option>
                <option value="02">02:00</option>
                <option value="03">03:00</option>
                <option value="04">04:00</option>
                <option value="05">05:00</option>
                <option value="06">06:00</option>
                <option value="07">07:00</option>
                <option value="08">08:00</option>
                <option value="09">09:00</option>
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
                <option value="14">14:00</option>
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
                <option value="19">19:00</option>
                <option value="20">20:00</option>
                <option value="21">21:00</option>
                <option value="22">22:00</option>
                <option value="23">23:00</option>
              </select>
            </div>
            <button
              type="submit"
              className="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Tambah Detail
            </button>
          </form>
        </div>
        {/* </Card> */}
      </div>
    </>
  );
};

export default Create;

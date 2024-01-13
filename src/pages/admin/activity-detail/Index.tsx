import React, { useEffect, useState } from "react";
import {
  deleteActivityDetail,
  findAllActivityDetail,
} from "../../../api/ActivityDetailApi";
import { findAllActivityTemplate } from "../../../api/ActivityTemplateApi";
import { Link } from "react-router-dom";
import ActivityTemplateInterface from "../../../interface/ActivityTemplateInterface";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import SweetAlert from "../../../components/SweetAlert";

export const RenderTable: React.FC = ({
  activityDetails,
  activityTemplateId,
}) => {
  const [activityDetailsFetch, setActivityDetailsFetch] = useState<
    ActivityTemplateInterface[]
  >([]);

  const fetchActivityDetail = async () => {
    try {
      const response = await findAllActivityDetail(activityTemplateId);
      setActivityDetailsFetch(response.data.data);
    } catch (error) {
      console.log("Error While Fetching Activity Detail ", error);
    }
  };

  const fetchData = () => {
    try {
      fetchActivityDetail();
    } catch (error) {
      console.log("Error While Fetch Data ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [activityDetails]);

  const handleDelete = async (id) => {
    try {
      await deleteActivityDetail(id);
      SweetAlert({
        icon: "success",
        title: "Berhasil Menghapus",
        text: "Selamat Anda Berhasil Menghapus Activity Detail!",
      });
      fetchData();
    } catch (error) {
      console.log("Error While Deleting Data ", error);
    }
  };

  return (
    <>
      <div className="bg-white mt-15 p-6 rounded shadow-md max-w-full overflow-x-auto">
        <table className="w-full table-auto mb-5">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                #
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Nama
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Deskripsi
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Waktu
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Ke-
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {activityDetailsFetch.map(
              (item: ActivityTemplateInterface, index: number) => (
                <tr key={index + 1}>
                  <td className="border-b border-[#eee]   pl-6 dark:border-strokedark">
                    <h1 className="font-medium text-black dark:text-white">
                      {index + 1}
                    </h1>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h1 className="font-medium text-black dark:text-white">
                      {item.name}
                    </h1>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h1 className="font-medium text-black dark:text-white">
                      {item.description}
                    </h1>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h1 className="font-medium text-black dark:text-white">
                      {item.time}
                    </h1>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h1 className="font-medium text-black dark:text-white">
                      {item.turn}
                    </h1>
                  </td>
                  <td className="border-b flex gap-x-4 border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <Link
                      to={"/admin/activity-detail/edit/" + item.id}
                      className="bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
                    >
                      <FaEdit className="white-icon" />
                    </Link>
                    <button
                      type="button"
                      className="bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                      onClick={() => handleDelete(item.id)}
                    >
                      <AiFillDelete className="white-icon" />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <Link
          to={"/admin/activity-detail/create/" + activityTemplateId}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Buat Detail
        </Link>
      </div>
    </>
  );
};

const Index = () => {
  const [isTemplateSelected, setIsTemplateSelected] = useState<boolean>(false);
  const [dataActivityDetail, setDataActivityDetail] = useState<any[]>([]);
  const [activityTemplateId, setActivityTemplateId] = useState<string>("");

  const [dataActivityTemplate, setDataActivityTemplate] = useState<
    ActivityTemplateInterface[]
  >([]);

  const handleTemplateSelected = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      setIsTemplateSelected(true);

      const response = await findAllActivityDetail(e.target.value);
      setActivityTemplateId(e.target.value);
      setDataActivityDetail(response.data.data);
    } catch (error) {
      console.log("Error While Selecting Template ", error);
    }
  };

  const handleFetchActivityTemplate = async () => {
    try {
      const response = await findAllActivityTemplate();
      setDataActivityTemplate(response.data.data);
    } catch (error) {
      console.log("Error While Fetching Activity Template ", error);
    }
  };

  const fetchData = () => {
    try {
      handleFetchActivityTemplate();
    } catch (error) {
      console.log("Error While Fetch Data ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <select
            className="mb-6 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            onChange={handleTemplateSelected}
          >
            {dataActivityTemplate.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {isTemplateSelected === true ? (
        <RenderTable
          activityDetails={dataActivityDetail}
          activityTemplateId={activityTemplateId}
        />
      ) : null}
    </>
  );
};

export default Index;

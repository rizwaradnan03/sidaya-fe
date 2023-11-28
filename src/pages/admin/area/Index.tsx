import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { findAllArea } from "../../../api/AreaApi";

const Index: React.FC = () => {
  const [areas, setAreas] = useState<any[]>([]);

  const fetchArea = async () => {
    try {
      const response = await findAllArea();
      setAreas(response.data);
    } catch (error) {
      console.log("Error While Fetching Activity Template ", error);
    }
  };

  const fetchData = () => {
    try {
        fetchArea();
    } catch (error) {
        console.log('Error While Fetch Data ', error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const handleDelete = async (id) => {
  //   try {
  //       const response = await deleteActivityTemplate(id)
  //       console.log(response)
  //       if(response.status == 200){
  //           SweetAlert({icon: 'success', title: 'Berhasil Menghapus', text: 'Selamat Anda Berhasil Menghapus Activity Template!'})
  //       }else{
  //           SweetAlert({icon: 'error', title: 'Gagal Menghapus', text: 'Maaf Anda Gagal Menghapus Activity Template!'})
  //       }
  //       fetchArea()
  //   } catch (error) {
  //       console.log('Error While Deleting Data ', error)
  //   }
  // }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <div>
          <h1 className=" font-thin text-5xl mt-6">Halaman Activity Template</h1>
          <div className="flex justify-end items-center mt-5">
            <Link
              to={"/admin/activity-template/create/"}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Buat Template
            </Link>
          </div>
        </div>

        <table className="w-full table-auto mt-5">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                #
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Nama
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {areas.map((item: any, index: number) => (
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
                <td className="border-b flex gap-x-4 border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <Link to={"/admin/activity-template/edit/" + item.id} className="bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800">
                    <FaEdit className="white-icon" />
                  </Link>
                  {/* <button type="button" className="bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800" onClick={() => handleDelete(item.id)}>
                    <AiFillDelete className="white-icon" />
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;

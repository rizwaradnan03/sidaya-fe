import { Card } from "flowbite-react";
import React from "react";

const Content: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <div className="p-4 sm:ml-64 dark:text-white ">
        <Card className="flex items-center justify-center h-48 mb-4 rounded dark:bg-gray-800">
          {children}
        </Card>
      </div>
    </>
  );
};

export default Content;

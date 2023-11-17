
import React from "react";

const Content: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <div className="flex-1 dark:text-white ">
          {children}
      </div>
    </>
  );
};

export default Content;

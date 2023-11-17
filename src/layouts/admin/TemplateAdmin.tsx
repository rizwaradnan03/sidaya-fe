import React from "react";
import SideBar from "./SideBar";
import Content from "./Content";

const TemplateAdmin: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <SideBar />
      <Content>
        {children}
      </Content>
    </>
  );
};

export default TemplateAdmin;

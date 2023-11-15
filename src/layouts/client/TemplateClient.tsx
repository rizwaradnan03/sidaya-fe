import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import Content from "./Content";

const TemplateClient: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Content>
        {children}
      </Content>
    </>
  );
};

export default TemplateClient;

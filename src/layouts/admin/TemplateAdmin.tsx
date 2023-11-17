import React from "react";
import SideBar from "./SideBar";
import Content from "./Content";

const TemplateAdmin: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <Content>
        {children}
      </Content>
    </div>
  );
};


export default TemplateAdmin;

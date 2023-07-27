import React, { FC } from "react";
import Navbar from "./Navbar";

interface props {
  children?: React.ReactNode;
  id?: string;
}

const Layout: FC<props> = ({ children, id }) => {
  return (
    <>
      <div className="top-0 sticky z-20">
        <Navbar />
      </div>
      <div
        className="w-full h-full min-h-screen flex flex-col overflow-x-hidden"
        id={id}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;

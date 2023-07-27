import React, { FC, useEffect, useState } from "react";
import Navbar from "./Navbar";

interface props {
  children?: React.ReactNode;
  id?: string;
}

const Layout: FC<props> = ({ children, id }) => {
  const [darkMode, setDarkmode] = useState<boolean>(false);
  const [trigerDark, setTriger] = useState<string | null>("");

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("dark");
    setTriger(storedDarkMode);
    if (storedDarkMode === "true") {
      setDarkmode(true);
    }
  }, [trigerDark]);
  
  return (
    <>
      <div data-theme={`${darkMode ? "light" : "dark"}`}>
        <div className="top-0 sticky z-20">
          <Navbar />
        </div>
        <div
          className="w-full h-full min-h-screen flex flex-col overflow-x-hidden"
          id={id}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;

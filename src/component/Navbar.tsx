import "./button.css"
import { useState, useEffect } from 'react';
const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
  const handleDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('dark', newDarkMode.toString());
    window.location.reload();
  };
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('dark');
    if (storedDarkMode === 'true') {
      setIsDarkMode(true);
    }
  }, []);
  
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">Cahyo</a>
        </div>
        
        <div className="navbar-end">
          <label className="switch mr-5">
            <input type="checkbox" checked={isDarkMode} onChange={handleDarkModeToggle}/>
            <span className="slider"></span>
          </label>
          <a href="https://wa.me/6285158693933"
         target="_blank"
          className="btn hover:bg-gradient-to-l bg-gradient-to-r from-three via-two to-one rounded-full font-medium">
            Lest's Talk
          </a>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';

import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);
  return (
    <React.Fragment>
      <div className="w-screen h-[80px] z-10 text-white drop-shadow-lg">
        <div className="flex justify-between items-center ">
          <div className="flex  justify-between items-center w-full">
            <h1 className="ml-5 text-3xl font-bold mr-4 sm:text-4xl">Kukuh Motor.</h1>
            <ul className="hidden md:flex">
              <li>
                <Link to="about" smooth={true} offset={-200} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="support" smooth={true} offset={-50} duration={500}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="platforms" smooth={true} offset={-100} duration={500}>
                  Project
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden mr-4" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute w-full px-8'}>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>
              About
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>
              Contact
            </Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full">
            <Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>
              Project
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navbar;

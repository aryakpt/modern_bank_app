import { useState } from 'react';
import { close, logo, menu } from '../../../assets';
import { navLinks } from '../../../constants';
const Navbar = () => {
  const [isToogled, setIsToogled] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      {/* mobile */}
      <div className="sm:hidden flex justify-end items-center">
        <img
          src={isToogled ? close : menu}
          alt="menu"
          onClick={() => setIsToogled((prev) => !prev)}
          className="cursor-pointer w-[28px] h-[28px] object-contain"
        />
        <div
          className={`${
            isToogled ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 rounded-xl sidebar`}
        >
          <ul className="list-none text-white px-3">
            {navLinks.map((nav, index) => {
              return (
                <li
                  key={nav.path}
                  className={`font-poppins font-normal cursor-pointer text-center text-[16px] text-white ${
                    index === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                  }`}
                >
                  <a href={`#${nav.path}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={``}></div>
      </div>
      {/* > mobile */}
      <ul className="list-none sm:flex hidden items-center">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.path}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
              }`}
            >
              <a href={`#${nav.path}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

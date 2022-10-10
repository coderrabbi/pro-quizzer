import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
const Header = () => {
  const navLinks = [
    { id: 1, name: "Home", to: "/home" },
    { id: 4, name: "Topics", to: "/topics" },
    { id: 2, name: "Statistics", to: "/statistics" },
    { id: 3, name: "Blog", to: "/blog" },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-between backdrop-blur-sm bg-slate-500 items-center px-16 py-5">
      <div>
        <h1 className="text-3xl font-bold">
          <Link to="/">
            <span className="text-pink-500">Pro</span>
            <span className="text-white"> Quizzer</span>
          </Link>
        </h1>
      </div>

      <div
        className="md:hidden  cursor-pointer relative"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        {toggle ? (
          <CgClose className="text-white text-3xl" />
        ) : (
          <HiOutlineMenuAlt3 className="text-white text-3xl" />
        )}
      </div>
      <ul
        className={` gap-5 md:flex ${
          toggle
            ? "absolute top-16 text-center right-0 p-6 flex-col  w-full bg-slate-500"
            : "hidden"
        }`}
      >
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className="text-lg font-semibold text-white uppercase mb-5"
          >
            <NavLink
              to={nav.to}
              className={({ isActive }) =>
                isActive ? "text-pink-500 border-b" : undefined
              }
            >
              {nav.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;

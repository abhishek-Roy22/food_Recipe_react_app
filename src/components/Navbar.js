import React, { useState } from "react";

const Navbar = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="w-full h-14 bg-slate-700 flex justify-around items-center overflow-hidden  sticky top-0">
      <img
        className=" w-20 h-20 object-cover"
        src="https://graphicsfamily.com/wp-content/uploads/2020/10/Restaurant-logo-design-free-template-scaled.jpg"
        alt="logo"
      />
      <div>
        <ul className="hidden md:flex gap-10">
          <li className="uppercase text-white hover:text-yellow-50">
            <a href="/">Home</a>
          </li>
          <li className="uppercase text-white hover:text-yellow-50">
            <a href="/">About</a>
          </li>
          <li className="uppercase text-white hover:text-yellow-50">
            <a href="/">Contact</a>
          </li>
          <li className="uppercase text-white hover:text-yellow-50">
            <a href="/">Recipe</a>
          </li>
        </ul>
      </div>
      <form onSubmit={onSubmit} className="flex justify-center align-middle">
        <input
          onChange={(e) => setText(e.target.value)}
          className=" bg-transparent border-b-white-900 border-b-2 py-1 px-3 focus:outline-none text-white font-Telma font-medium"
          type="text"
          placeholder="Search Recipe Term..."
        />
        <button
          type="submit"
          className=" border-none rounded-lg bg-teal-700 py-2 px-5 ml-1 text-white hover:border-teal-700 hover:text-teal-700 hover:bg-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Navbar;

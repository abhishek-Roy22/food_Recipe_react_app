import React from "react";

const RecipeCard = ({ r }) => {
  return (
    <div className=" flex flex-col rounded-lg shadow-lg w-75 overflow-hidden">
      <img
        className=" object-cover w-full  h-72 overflow-hidden"
        src={r.recipe.image}
        alt="img"
      />
      <div className="py-5 px-4">
        <span className=" text-teal-900 break-all font-bold uppercase font-Telma">
          {r.recipe.label}
        </span>
      </div>
      <div className="py-3 px-4 flex gap-4 border-t-2 border-b-2 m-2">
        <div className=" inline-block text-sm uppercase border-r-2 border-gray-700 px-5 text-gray-400 font-light">
          {Math.floor(r.recipe.calories)} calories
        </div>
        <div className="uppercase inline-block text-sm px-2 text-gray-400 font-light">
          6 ingredients
        </div>
      </div>
      <div className="text-gray-500 py-4 px-4 mb-2 cursor-pointer">
        {r.recipe.source}
      </div>
    </div>
  );
};

export default RecipeCard;

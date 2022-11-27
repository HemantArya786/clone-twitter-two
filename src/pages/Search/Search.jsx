import React from "react";
import { FiSettings } from "react-icons/fi";

function Search() {
  return (
    <main className=" gap-3 py-1 d-flex flex-row border  ">
      <div className="w-75 d-flex justify-contain-center">
        <input
          placeholder="  search"
          className="bg-dark border-0 w-100 text-white rounded-pill  "
        />
      </div>
      <div className="d-flex w-25  ">
        <h3>
          <FiSettings className="text-white " />
        </h3>
      </div>
    </main>
  );
}
export default Search;

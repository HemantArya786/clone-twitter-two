import React from "react";
import { FiSettings } from "react-icons/fi";

function Search() {
  return (
    <main className=" gap-3 py-1 d-flex flex-row ">
      <div>
        <input
          style={{ width: "585px", height: "40px" }}
          placeholder="  search"
          className="bg-dark border-0 rounded-pill  "
        />
      </div>
      <div>
        <h3>
          <FiSettings
            className="text-white "
            style={{ width: "25px", height: "40px" }}
          />
        </h3>
      </div>
    </main>
  );
}
export default Search;

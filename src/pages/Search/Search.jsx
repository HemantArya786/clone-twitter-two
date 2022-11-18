import React from "react";
import { FiSettings } from "react-icons/fi";

function Search() {
  return (
    <main className="d-flex justify-content-between px-5 m-2 gap-3">
      <div>
        <input
          placeholder="   Search Twitter"
          className="bg-dark rounded-pill border-0 "
          style={{ width: "500px", height: "45px" }}
        />
      </div>
      <div>
        <h2>
          <FiSettings className="text-white" />
        </h2>
      </div>
    </main>
  );
}
export default Search;

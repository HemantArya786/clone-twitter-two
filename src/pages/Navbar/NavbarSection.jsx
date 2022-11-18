import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

function Navbar() {
  return (
    <main className="my-2 vh-100">
      <div
        className="my-3 d-flex text-white  justify-content-start px-3"
        style={{ width: "324px", height: "50px" }}
      >
        <BsTwitter />
      </div>
      <div
        className="text-white d-flex  my-3 gap-3 px-3"
        style={{ width: "324px", height: "50px" }}
      >
        <FaHashtag />
        <h3>Explore</h3>
      </div>
      <div
        className="text-white d-flex my-3  gap-3 px-3"
        style={{ width: "324px", height: "50px" }}
      >
        <FiSettings />
        <h3>Setting</h3>
      </div>
    </main>
  );
}
export default Navbar;

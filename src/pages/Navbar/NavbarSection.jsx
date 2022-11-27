import React from "react";
import {
  BsTwitter,
  BsCardList,
  BsBell,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { BiSearchAlt, BiMessageDetail } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <main className=" ">
      <div
        className="my-3 d-flex text-white  justify-content-start px-3"
        style={{ width: "324px", height: "50px" }}
      >
        <h3>
          <BsTwitter />
        </h3>
      </div>
      <div
        className="text-white d-flex  my-3   gap-3 px-3"
        style={{ width: "324px", height: "50px" }}
      >
        <h3>
          <HiHome />
        </h3>
        <h3>Home</h3>
      </div>
      <div
        className="text-white d-flex my-3  gap-3 px-3"
        style={{ width: "324px", height: "50px" }}
      >
        <h3>
          <BsBell />
        </h3>
        <h3>Notification</h3>
      </div>
      <div
        className="text-white d-flex my-3  gap-3 px-3"
        style={{ width: "324px", height: "50px" }}
      >
        <h3>
          <BiSearchAlt />
        </h3>
        <h3>Search</h3>
      </div>
      <div
        className="text-white d-flex my-3  gap-3 px-3"
        style={{ width: "324px", height: "50px" }}
      >
        <h3>
          <BiMessageDetail />
        </h3>
        <h3>messages</h3>
      </div>
      <div
        className="text-white d-flex my-3  gap-3 px-3"
        style={{ width: "324px", height: "50px" }}
      >
        <h3>
          <BsFillBookmarkFill />
        </h3>
        <h3>bookmark</h3>
      </div>
      <div
        className="text-white d-flex my-3  gap-3 px-3"
        style={{ width: "324px", height: "50px" }}
      >
        <h3>
          <BsCardList />
        </h3>
        <h3>List</h3>
      </div>
      <div
        className="text-white d-flex my-3  gap-3 px-3"
        style={{ width: "324px", height: "50px" }}
      >
        <h3>
          <CgProfile />
        </h3>
        <h3>Profile</h3>
      </div>
    </main>
  );
}
export default Navbar;

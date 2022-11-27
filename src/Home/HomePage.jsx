import React from "react";
import Navbar from "../pages/Navbar/NavbarSection";
import Review from "../pages/Review/Review";
import { BsStars } from "react-icons/bs";
import "../Home/HomePage.css";

import Tweet from "../pages/Tweet/TweetPages";
function Home() {
  return (
    <main className="d-flex container  ">
      <section className=" w-25 position-fixed ">
        <div>
          <Navbar />
        </div>
      </section>

      <section className=" text-white w-50 " style={{ marginLeft: 200 }}>
        <div className="d-flex  position-fixed justify-content-between Home-bar-section border border-bottom-0 border-top-0 w-50">
          <h2>Home</h2>
          <div className="px-3">
            <h2>
              <BsStars />
            </h2>
          </div>
        </div>
        <div className="mt-5">
          <Tweet />
        </div>
      </section>
      <section className=" text-white position-fixed " style={{ right: 0 }}>
        <h1>W.I.P</h1>
      </section>
    </main>
  );
}
export default Home;

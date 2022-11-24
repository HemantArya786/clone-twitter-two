import React from "react";
import Navbar from "../pages/Navbar/NavbarSection";

import Tweet from "../pages/Tweet/TweetPages";
function Home() {
  return (
    <main className="d-flex container  ">
      <section className=" w-25  ">
        <div>
          <Navbar />
        </div>
      </section>

      <section className=" border text-white w-50">
        <div className="d-flex px-3">
          <h2>Home</h2>
        </div>
        <div>
          <Tweet />
        </div>
      </section>
      <section className=" text-white w-25 ">
        <h1>W.I.P</h1>
      </section>
    </main>
  );
}
export default Home;

import React from "react";
import Navbar from "../Navbar/NavbarSection";
import Tweet from "../Tweet/TweetPages";

function Home() {
  return (
    <main className="d-flex justify-content-between container ">
      <section className="  border w-25 ">
        <h1>
          <Navbar />
        </h1>
      </section>
      <section className=" w-50 ">
        <h1>
          <Tweet />
        </h1>
      </section>
      <section className="border w-25 ">
        <h1>review</h1>
      </section>
    </main>
  );
}
export default Home;

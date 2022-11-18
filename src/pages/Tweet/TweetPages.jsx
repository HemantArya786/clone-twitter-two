import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../Search/Search";

function Tweet() {
  const [content, setContent] = useState("");
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4500/tweet")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, [update]);

  const Tweet = () => {
    axios
      .post("http://localhost:4500/tweet", { content: content })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setUpdate(!update);
  };

  const Delete = (id) => {
    axios
      .delete("http://localhost:4500/tweet/" + id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setUpdate(!update);
  };

  const Update = (id) => {
    axios
      .put(`http://localhost:4500/tweet/${id}`, { content: content })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="tweet-box ">
      <section className=" d-flex justify-content-center flex-column ">
        <section className="mx-auto ">
          <div>
            <Search />
          </div>
          <div className="">
            <input
              style={{ width: "647px", height: "300px" }}
              className="register-dark  text-white  border-0"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <div
          className=" mx-auto d-flex justify-content-end my-2 "
          style={{ width: "647px", height: "50px" }}
        >
          <button
            className="btn btn-primary rounded-pill  px-5"
            onClick={Tweet}
          >
            <b>Tweet</b>
          </button>
        </div>
      </section>
      <section className="d-flex justify-content-center vh-100">
        <li>
          {list.map((item) => (
            <div className="d-flex gap-5 text-white border m-2">
              <p className="border w-100 ">{item.content}</p>
              <p className="border">{item.date}</p>
              <button
                onClick={() => Update(item._id)}
                className="btn btn-primary px-5 "
              >
                Edit
              </button>
              <button
                onClick={() => Delete(item._id)}
                className="btn btn-outline-dark px-5"
              >
                Delete
              </button>
            </div>
          ))}
        </li>
      </section>
    </main>
  );
}
export default Tweet;

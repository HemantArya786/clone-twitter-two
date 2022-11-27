import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import TweetArray from "../TweetArray/TweetArray";

function Tweet() {
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(true);
  const [content, setContent] = useState("");

  const Delete = (id) => {
    console.log(id);
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

  const Tweet = () => {
    axios
      .post("http://localhost:4500/tweet", { content: content })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setUpdate(!update);
  };
  useEffect(() => {
    axios
      .get("http://localhost:4500/tweet")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, [update]);

  return (
    <main className="tweet-box flex-column vh-100  ">
      <div className="">
        <section className="  d-flex justify-content-center">
          <div className=" w-100 ">
            <Search />
          </div>
        </section>
        <section className="py-3 border border-top-0">
          <div className=" d-flex ">
            <div className="col-sm-3 d-flex align-item-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwsxvLva3VHxteFNbKalYnVePnILtU_4kPSg&usqp=CAU"
                alt=""
                className="img-fluid rounded-circle"
              />
            </div>
            <div className="col-sm-9">
              <textarea
                row={8}
                col={20}
                className="register-dark w-100 text-white  "
                style={{ height: 120 }}
                placeholder=" what's happening ?"
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end ">
            <button
              className="btn btn-primary rounded-pill  px-5"
              onClick={Tweet}
            >
              Tweet
            </button>
          </div>
        </section>
      </div>
      <section className="flex-column-reverse d-flex ">
        {list.map((item) => (
          <TweetArray
            content={item.content}
            onClickDelete={() => Delete(item._id)}
            onClickEdit={() => Update(item._id)}
          />
        ))}
      </section>
    </main>
  );
}
export default Tweet;

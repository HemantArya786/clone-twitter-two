import axios from "axios";
import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import TweetArray from "../TweetArray/TweetArray";
import { BsCardImage } from "react-icons/bs";
import { AiOutlineFileGif, AiTwotoneCalendar } from "react-icons/ai";
import { FaPollH } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";

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
    // test
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
        <section className="py- border border-top-0">
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
          <div className="d-flex justify-content-between border ">
            <div className="col-9  border-3 text-primary ">
              <div className="d-flex justify-content-between">
                <div className="">
                  <BsCardImage />
                </div>
                <div>
                  <FaPollH />
                </div>
                <div>
                  <BsEmojiSmileFill />
                </div>
                <div>
                  <AiTwotoneCalendar />
                </div>
                <div>
                  <CiLocationOn />
                </div>
              </div>
            </div>
            <div className="col-3   border-3">
              <button
                className="btn btn-primary rounded-pill px-5"
                onClick={Tweet}
              >
                Tweet
              </button>
            </div>
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

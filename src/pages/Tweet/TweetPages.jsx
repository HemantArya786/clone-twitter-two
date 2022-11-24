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
    <main className="tweet-box flex-column ">
      <section className=" my-2 d-flex justify-content-center">
        <div>
          <Search />
        </div>
      </section>
      <section className="d-flex justify-content-center  ">
        <div className="border" style={{ width: "100px", height: "150px" }}>
          <img
            className="border "
            src="http://store-images.s-microsoft.com/image/apps.50484.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2c71c1ea-c28f-4dd1-b72d-c43cdd3476f4"
            alt="err"
            style={{
              width: "100px",
              objectFit: "cover",
              height: "100%",
            }}
          />
        </div>
        <div className="">
          <textarea
            row={8}
            col={20}
            style={{ width: "545px", height: "150px" }}
            className="register-dark  text-white  "
            placeholder=" text"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </section>
      <section className=" my-5 d-flex justify-content-center  ">
        <div
          className=" d-flex justify-content-end"
          style={{ width: "660px", height: "40px" }}
        >
          <button
            className="btn btn-primary rounded-pill  px-5"
            onClick={Tweet}
          >
            <b>Tweet</b>
          </button>
        </div>
      </section>

      <section className="d-flex justify-content-center  vh-100  ">
        <div className="" style={{ maxWidth: 650 }}>
          {list.map((item) => (
            <div className="row border">
              <div className="col-sm-8">
                <p
                  className="text-white text-wrap text-break"
                  style={{ maxWidth: 500 }}
                >
                  {item.content}
                </p>
              </div>
              <div className="col-sm-4 d-flex">
                <button
                  onClick={() => Update(item._id)}
                  className="btn btn-primary px-5"
                >
                  Edit
                </button>
                <button
                  onClick={() => Delete(item._id)}
                  className="btn btn-warning px-5"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
export default Tweet;

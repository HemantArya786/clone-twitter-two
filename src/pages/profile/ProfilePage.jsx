import axios from "axios";
import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4500/user/profile/${localStorage.getItem("id")}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="vh-100 container">
      <section className="d-flex justify-content-between">
        <div>
          <h1 className="text-white">User Profile</h1>
        </div>

        <div className="d-flex align-item-center">
          <div>
            <button onClick={() => setEditMode(!editMode)}>
              {editMode ? "done" : "edit"}
            </button>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center my-3 p-1 h-25">
        <div style={{ width: "185px" }}>
          <img
            className="img-fluid   rounded-circle"
            src="https://thumbs.dreamstime.com/b/bubble-pop-art-comic-style-poster-t-shirt-print-post-card-video-blog-cover-bitch-sticker-social-media-content-vector-hand-161993913.jpg"
            alt="err"
          />
        </div>
      </section>

      <section className="text-white d-flex flex-column  py-2">
        <section className="  d-flex border  flex-column">
          <div className="">
            <label>First-Name</label>
          </div>
          <div className="">
            {editMode ? (
              <input
                className="bg-dark  text-white"
                onChange={(e) =>
                  setUser({ ...user, firstname: e.target.value })
                }
                value={user.firstname}
              />
            ) : (
              <p>{user.firstname}</p>
            )}
          </div>
        </section>
        <section className=" d-flex border  flex-column ">
          <div className="">
            <lable>Last-Name</lable>
          </div>
          <div className="">
            {editMode ? (
              <input
                className="bg-dark  text-white"
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              />
            ) : (
              <p>{user.lastname}</p>
            )}
          </div>
        </section>
        <section className=" d-flex flex-column">
          <div className="">
            <lable>Phone</lable>
          </div>
          <div className="">
            {editMode ? (
              <input
                className="bg-dark  text-white"
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            ) : (
              <p>{user.phone}</p>
            )}
          </div>
        </section>
        <section className="d-flex flex-column ">
          <div className="">
            <lable>Email</lable>
          </div>
          <div className="">
            {editMode ? (
              <input
                className="bg-dark text-white"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            ) : (
              <p>{user.email}</p>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
export default Profile;

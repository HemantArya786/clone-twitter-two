import axios from "axios";
import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState("");
  const [firstname, setFirstname] = useState({ name: user.firstname });
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4500/user/profile/${localStorage.getItem("id")}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="vh-100 container">
      <div>
        <h1 className="text-white">User Profile</h1>
      </div>

      <section className="border d-flex justify-content-center my-3 p-1 h-25">
        <div style={{ width: "185px" }}>
          <img
            className="img-fluid "
            src="https://thumbs.dreamstime.com/b/bubble-pop-art-comic-style-poster-t-shirt-print-post-card-video-blog-cover-bitch-sticker-social-media-content-vector-hand-161993913.jpg"
            alt="err"
          />
        </div>
      </section>

      <section className="text-white d-flex flex-column border border-danger py-2">
        <section className="border my-2 d-flex">
          <div className="col-4">
            <label>First-Name</label>
          </div>
          <div className="col-4">
            <input
              onChange={(e) => setFirstname(e.targer.value)}
              value={firstname}
            />
          </div>
          <div className="col-4 d-flex flex-end border">
            <button>Edit</button>
          </div>
        </section>
        <section className="border d-flex">
          <div className="col-4">
            <lable>Last-Name</lable>
          </div>
          <div className="col-4">
            <p>{user.lastname}</p>
          </div>
          <div className="col-4 d-flex flex-end border">
            <button>Edit</button>
          </div>
        </section>
        <section className="border d-flex">
          <div className="col-4">
            <lable>Phone</lable>
          </div>
          <div className="col-4">
            <p>{user.phone}</p>
          </div>
          <div className="col-4 d-flex flex-end border">
            <button>Edit</button>
          </div>
        </section>
        <section className="d-flex border">
          <div className="col-4">
            <lable>Email</lable>
          </div>
          <div className="col-4">
            <p>{user.email}</p>
          </div>
          <div className="col-4 d-flex flex-end border">
            <button>Edit</button>
          </div>
        </section>
      </section>
    </main>
  );
}
export default Profile;

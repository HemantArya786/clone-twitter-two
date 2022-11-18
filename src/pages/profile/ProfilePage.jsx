import axios from "axios";
import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState("");

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
      <section>
        <div className="d-flex text-white gap-3 flex-column">
          <div className="d-flex  border justify-content-between">
            <div className="d-flex gap-3">
              <label>first name</label>
              <p>{user.firstname}</p>
            </div>
            <button>edit</button>
          </div>
          <br />
          <div className="d-flex  border justify-content-between ">
            <div className="d-flex gap-3">
              <label>last name</label>
              <p>{user.lastname}</p>
            </div>
            <button>edit</button>
          </div>
          <br />
          <div className="d-flex border justify-content-between">
            <div className="d-flex gap-3">
              <label>phone</label>
              <p>{user.phone}</p>
            </div>
            <button>edit</button>
          </div>
          <br />
          <div className="d-flex  justify-content-between border">
            <div className="d-flex gap-3">
              <label>email</label>
              <p>{user.email}</p>
            </div>
            <button>edit</button>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Profile;

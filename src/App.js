import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/RegisterPage";
import Login from "./pages/Login/LoginPages";
import Tweet from "./pages/Tweet/TweetPages";
import Home from "./Home/HomePage";
import Profile from "./pages/profile/ProfilePage";
import { FaCommentsDollar } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tweet" element={<Tweet />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

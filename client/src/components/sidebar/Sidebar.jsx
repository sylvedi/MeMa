import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
       
        <img className="sideimg"
          src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <p>
        “I’m The Last Woman Standing”: Nicola Sturgeon On The Climate Crisis, The “Fragile Male Ego” And Life After Politics
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="topIcon fab fa-facebook-f"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-pinterest-p"></i>
        <i className="topIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

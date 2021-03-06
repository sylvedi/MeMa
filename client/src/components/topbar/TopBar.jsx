import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
       <span className="lo">MeMa</span>
      <div className="topLeft">
     
        <i className="topIcon fab fa-facebook-f"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-pinterest-p"></i>
        <a href="https://www.instagram.com/sylv.m.edi"><i className="topIcon fab fa-instagram"></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
        <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/fashion">
              FASHION
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/beauty">
              BEAUTY
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/news">
              NEWS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              CREATE
            </Link>
          </li>
        
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/profile">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

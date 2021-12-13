import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./profile.css";



export default function Profile() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [file] = useState(null);
  const [username] = useState("");
  const [email] = useState("");
  const [password] = useState("");
  
  

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    
    };
    getPost();
  }, [path]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
   
  };
  return (

           <div className="profileContainer">

              <div className="profile">
                <div className="profileWrapper">

                   

                    <div className="profilePP">
                        <img
                        src={file ? URL.createObjectURL(file) : PF+user.profilePic}
                        alt=""
                        />
                
                    </div>

                            <div className="userInfo">
                                
                                <h5>{user.username}</h5>     
                                <h4>{user.email}</h4>       
                            </div>

                            
                                                
                    <Link className="profileSubmit" to="/settings" type="submit">Edit User</Link>

          
                </div>
               
            </div>
            
           
          
          </div>
          
  );
}

import "./profile.css";

import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";


export default function Profile() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

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

                    <div className="profileTitle">
                    <span className="profileUpdateTitle">USER ACCOUNT</span>
                    </div>

                    <div className="profilePP">
                        <img
                        src={file ? URL.createObjectURL(file) : PF+user.profilePic}
                        alt=""
                        />
                
                    </div>

                            <div className="userInfo">
                                
                                <h5>{user.username}</h5>            
                            </div>
                            
                            <label>{user.email}</label>
                                                
                    <button className="settingsSubmit" type="submit">Edit User</button>
 
                </div>
            
            </div>
          
           </div>
  );
}

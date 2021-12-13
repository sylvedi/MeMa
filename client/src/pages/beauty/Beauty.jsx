import "./beauty.css";
import axios from "axios";
import React, { useState } from "react"; 



export default function Beauty() {

    const [result, setResult] = useState([]);

    const clientId = "kdZe_C1Q0QrL26xfyTFoe0YTRqHtEzUvk71cbNsW0TI";
    const url = "https://api.unsplash.com/search/photos?page=11&query=BEAUTY/%20FASHION"  + "&client_id=" +  clientId;

    axios.get(url).then(response => {
        console.log(response);
        setResult(response.data.results);
    });

 return (
   
     <div>
         <div className="title">
         <span className="topstories">Beauty</span>
         </div>
    <div className="container">
    
   {result.map((image) => (
       <>
       <div className="card">
          <div className="post">
          <img src={image.urls.small} className="img" alt="beauty" />
           <p> <i className="topIcons fab fa-instagram"></i><a className="aa" href={`https://www.instagram.com/${image.user.instagram_username}`}>{image.user.instagram_username}</a></p>
           <div className="user"><p className="username">Photp by {image.user.name}</p></div>
            <p className="des">{image.description}</p>
          </div>
            
       </div>
       </>
   ))}

    </div>
    </div>
 );
}
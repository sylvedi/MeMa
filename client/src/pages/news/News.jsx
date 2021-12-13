import "./news.css";
import axios from "axios";
import React, { useState } from "react"; 

export default function News() {

   const [result, setResult] = useState([]);

   const url = "https://newsapi.org/v2/everything?q=Apple&from=2021-12-02&sortBy=popularity&apiKey=e93080ea012f4ed8bb50cdf0871ca550";

   axios.get(url).then(response => {
       console.log(response);
       setResult(response.data.articles);
   });

return (
  
    <div>
        <div className="title">
        <span className="topstories">News</span>
        </div>
   <div className="container">
       
  {result.map((image) => (
      <>
      <div className="card">
         <div className="post">
         <img src={image.urlToImage} className="img" alt="beauty" />
          <p> <i className="topIcons far fa-newspaper"></i>{image.author}</p>
          <div className="user"><p className="username">Photp by {image.title}</p></div>
           <p className="des">{image.description}</p>
         </div>
           
      </div>
      </>
  ))}

   </div>
   </div>
);
}
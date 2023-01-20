import React, { useEffect, useState } from "react";
import Card from "./card";
import { Link } from "react-router-dom";
import axios from 'axios'


import "./PostView.css"
const PostView = () => {


    let [userDetails, setUserDetails] = useState([])

    useEffect(() => {
        axios.get("https://akhil-instaclone-backend.onrender.com/api/posts").then((res) => {
            console.log(res)
             setUserDetails(res.data.post)
        })
    }, [])
   
    return (
        <div>
            <div className="mainContainer">
                <section>
                    <nav>
                        <div className="nav-container">
                           <span><img className="Nav-icon" alt="Nav-icon" src="https://cdn-icons-png.flaticon.com/512/1384/1384886.png" /> </span> <strong  className="nav-title">InstaClone</strong>
                         <span className="cam-icon"> <Link to="addpost">  < img className="cam-icon" alt="Cam-icon" src="https://cdn-icons-png.flaticon.com/512/83/83574.png" /> </Link></span> 
                        </div>
                    </nav>
                </section>
                <div className="posts-container">

                    <ol>
                        <section >
                            {userDetails.map((user, ind) => {
                                return (
                                    
                                    <li key={ind} className="post-card">
                                        <Card user={user}/>
                                    </li>
                                    
                                )
                            })}
                        </section>

                    </ol>
                </div>
            </div>

        </div>
    )
}
export default PostView;
import React from "react";
import "./card.css"

const Card = ({ user }) => {
    console.log(user.PostImage)

    return (
        <div className="postCardSize">
            <section className="card-header">
                <section>
                    <span className="username">{user.author}</span>
                    <br></br><span style={{ color: "grey" }}>{user.location}</span>
                </section>
                <section style={{ marginTop: "6px" }}>
                    <i className="fa-solid fa-ellipsis"></i>
                </section>
            </section>
            <div>
                <img className="imagecard" src={user.postImage} alt="postImage" />
            </div>

            <section className="card-footer">
                <section className="icon-date-container">
                    <section className="like-share-container">
                        <i style={{marginLeft : "8px",fontSize:"24px"}} className="fa-regular fa-heart"></i>
                        <i style={{marginLeft : "8px",fontSize:"24px"}} className="fa-regular fa-paper-plane"></i>
                    </section>
                    <section className="date-container">
                        {user.date}
                    </section>


                </section>
                <div style={{ color: "grey",paddingLeft: "8px",marginTop: "4px",marginBottom:"4px" }}>{user.likes} Likes</div>
                <div style={{paddingLeft : "8px",marginBottom: "6px" }} ><b>{user.description}</b></div>
            </section>
        </div>

    )
}
export default Card;
import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import FileBase64 from 'react-file-base64';


import "./addPostForm.css"

const AddPostForm = () => {
    const [formdetails, setFormdetails] = useState({ postImage: "", author: "", location: "", description: "" })
    const navigate = useNavigate()
    const isValidForm = formdetails.postImage.length && formdetails.author.length && formdetails.location.length && formdetails.description.length
    const [isValid, setValid] = useState(false)
    const handlePost = (e) => {
        console.log("clicked", isValidForm)
        console.log(isValid)
        e.preventDefault()
        if(isValidForm === 0){
            setValid(true)
        }else{
            setValid(false)
        }
        axios.post("https://akhil-instaclone-backend.onrender.com/api/posts/addpost",{
            postImage : formdetails.postImage.base64,
            author : formdetails.author,
            location : formdetails.location,
            description : formdetails.description
        }).then(()=> navigate("/postview"))
    }

    return (
        <div className="main-body">
            <form method="post" action="/addpost" onSubmit={handlePost}>
                <FileBase64
                    multiple={false}
                    onDone={(base64) => setFormdetails({ ...formdetails, postImage: base64 })} />
                <input type="text" placeholder="Author" onChange={(e) => {setFormdetails({...formdetails,author : e.target.value})}}/><br />
                <input type="text" placeholder="Location" onChange={(e) => {setFormdetails({...formdetails,location : e.target.value})}}/><br />
                <input type="text" placeholder="Description" onChange={(e) => {setFormdetails({...formdetails,description : e.target.value})}}/> <br />
                { isValid && <div style={{ color: "red", marginTop: "10px" }}>All fields are mandatory</div> }
                <button>Post</button>
            </form>
        </div>
    )
}

export default AddPostForm;
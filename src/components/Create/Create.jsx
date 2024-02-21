import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [createPost, setCreatePost] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreatePost(() => ({ ...createPost, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(createPost);
    postData();
    alert("Successfully Submitted!!!");

    navigate("/");
  };

  const postData = () => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, createPost, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div className="form-wrapper">
      <div className="input-wrapper sm: w-[20rem] lg:w-[30rem]">
        <h2 className="headline">Enter Title And Description To Create Post</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Enter Title Here"
          name="title"
          value={createPost.title}
          onChange={handleChange}
        />
        <textarea
          className="input-field"
          type="text"
          rows={6}
          cols={70}
          placeholder="Enter Description Here"
          name="description"
          value={createPost.description}
          onChange={handleChange}
        />
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Create;

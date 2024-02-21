import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const Posts = () => {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
  }, [page]);

  const getPosts = () => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=10`
      )
      .then((response) => {
        setPostList(response.data);
        console.log(response.data);
      });
  };

  const handleClick = (id) => {
    navigate(`/view/${id}`);
  };

  return (
    <div className="posts-section">
      <div className="container page-wrapper mx-auto">
        <div className="content-wrapper">
          {postList.map((post) => {
            return (
              <div
                className="card-content sm: w-[20rem]"
                key={post.id}
                onClick={() => handleClick(post.id)}
              >
                <span className="card-title">{post.title}</span>
                <p className="card-description">{post.body}</p>
              </div>
            );
          })}
        </div>
        <div>
          <Pagination page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default Posts;

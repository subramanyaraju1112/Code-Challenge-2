import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const View = () => {
  const [viewData, setViewData] = useState();
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    console.log(params.id);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => {
        setViewData(response.data);
        console.log(response.data);
      });
  };
  return (
    <div className="post-section">
      <div className="container content-wrapper mx-auto">
        <div className="card-content sm: w-[20rem]">
          <span className="card-title">{viewData?.title}</span>
          <p className="card-description">{viewData?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default View;

import React, { useState, useEffect } from "react";
import { Button, Card, Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPost } from "../redux/features/postSlice";
import LoadingCard from "./LoadingCard";

const Home = () => {
  const [id, setId] = useState();
  const dispatch = useDispatch();
  const { loading, post } = useSelector((state) => ({ ...state.app }));
  console.log("post", post);
  const fetchUserPost = () => {
    if (!id) {
      window.alert("please provide an ID");
    } else {
      dispatch(getPost({ id }));
      setId("");
    }
  };
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Fetch Post</h1>
      <Input
        placeholder="Enter User Id"
        type="number"
        onChange={(e) => setId(e.target.value)}
        value={id}
        style={{ width: "300px" }}
      />
      <br />
      <br />
      <Space size="small" style={{ margin: 10 }}>
        <Button type="primary" onClick={fetchUserPost}>
          Fetch User Post
        </Button>
        <Button type="primary" onClick={() => navigate("/createPost")}>
          Create User Post
        </Button>
      </Space>
      <br />
      <br />
      {loading ? (
        <LoadingCard count={1} />
      ) : (
        <>
          {post.length && (
            <div className="site-card-border-less-wrapper">
              <Card type="inner" title={post[0].title}>
                <p>User Id: {post[0].id}</p>
                <span>{post[0].body}</span>
              </Card>
              <Space
                size="middle"
                style={{ marginTop: 35, marginLeft: 5, float: "right" }}
              >
                <Button
                  style={{ cursor: "pointer" }}
                  type="primary"
                  danger
                  onClick={() => dispatch(deletePost({ id: post[0].id }))}
                >
                  Delete
                </Button>
                <Button style={{ cursor: "pointer" }} type="primary">
                  Edit
                </Button>
              </Space>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
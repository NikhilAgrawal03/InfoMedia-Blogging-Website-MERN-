import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import LIKE from "../components/Like.js";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { listBlogDetails } from "../actions/blogActions.js";
import { removebookmark } from "../actions/bookmarkActions.js";
/**
 * @author
 * @function BlogPostScreen
 **/

const BlogPostScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  const bookmark = useSelector((state) => state.bookmark);
  const { bookmarkItems } = bookmark;

  let bookmarked = [];
  bookmarkItems.map((item) => {
    bookmarked.push(item);
  });
  console.log(bookmarked);

  let bk = false;
  bookmarked.map((eachBookmark) => {
    if (eachBookmark.blog === blog._id) {
      bk = true;
      return bk;
    }
  });

  useEffect(() => {
    dispatch(listBlogDetails(match.params.id));
  }, [dispatch, match]);

  const bookmarkBlogHandler = () => {
    // if (bk) {
    //   bk = false;
    //   dispatch(removebookmark(id));
    // } else {
    //   history.push(`/bookmark/${match.params.id}`);
    // }
    history.push(`/bookmark/${match.params.id}`);
  };

  const blogImgStyle = {
    objectFit: "cover",
    height: "60vh",
    width: "70vh",
    margin: "auto",
    display: "block",
  };

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <h3 style={{ textAlign: "center" }}>{blog.blogTitle}</h3>
          <Image
            src={blog.blogImage}
            style={blogImgStyle}
            alt={blog.name}
            fluid
          />

          <p className="my-3" style={{ textAlign: "center" }}>
            Posted by {blog.user} on {blog.createdAt}
          </p>
          <div className="my-3" style={{ textAlign: "center" }}>
            <div className="mr-2" style={{ display: "inline-block" }}>
              <LIKE value={blog.rating} text={blog.rating} />
            </div>
            <div
              onClick={bookmarkBlogHandler}
              type="button"
              className="ml-2"
              style={{ display: "inline-block" }}
            >
              <i
                style={{ fontSize: "40px", color: "red" }}
                className={bk ? "fas fa-bookmark" : "far fa-bookmark"}
              ></i>
            </div>
          </div>
          <Row>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>{blog.blogText}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default BlogPostScreen;

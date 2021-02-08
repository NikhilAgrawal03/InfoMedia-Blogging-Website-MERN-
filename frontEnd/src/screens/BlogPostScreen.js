import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import LIKE from "../components/Like.js";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { listBlogDetails } from "../actions/blogActions.js";
/**
 * @author
 * @function BlogPostScreen
 **/

const BlogPostScreen = ({ match }) => {
  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogDetails);
  const { loading, error, blog } = blogDetails;

  useEffect(() => {
    dispatch(listBlogDetails(match.params.id));
  }, [dispatch, match]);

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
            <div class="mr-2" style={{ display: "inline-block" }}>
              <LIKE value={blog.rating} text={blog.rating} />
            </div>
            <div class="ml-2" style={{ display: "inline-block" }}>
              <i
                class="far fa-bookmark ml-4"
                style={{ fontSize: "40px", display: "inline" }}
              ></i>
            </div>
            {/* <i
              class="far fa-bookmark ml-4"
              style={{ fontSize: "40px", display: "inline" }}
            ></i> */}
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

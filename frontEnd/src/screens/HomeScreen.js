import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import BlogPost from "../components/BlogPost.js";
import Loader from "../components/Loader";
import { listBlogs } from "../actions/blogActions.js";
/**
 * @author
 * @function HomeScreen
 **/

const HomeScreen = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>
          <Loader />
        </h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {blogs.map((blog) => (
            <Col key={blog._id} sm={12} md={6} lg={6} xl={6}>
              <BlogPost blog={blog} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;

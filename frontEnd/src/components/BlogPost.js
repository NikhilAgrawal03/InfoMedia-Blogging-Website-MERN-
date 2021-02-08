import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
/**
 * @author
 * @function BlogPost
 **/

const BlogPost = ({ blog }) => {
  const blogImgStyle = {
    objectFit: "cover",
    height: "30vh",
  };

  return (
    <Card className="my-1 p-1 rounded" border="light">
      <Row>
        <Col>
          <Link to={`blog/${blog._id}`}>
            <Card.Img src={blog.blogImage} variant="top" style={blogImgStyle} />
          </Link>
        </Col>
        <Col>
          <Card.Body>
            <Link to={`blog/${blog._id}`}>
              <Card.Title as="div">
                <strong>{blog.blogTitle}</strong>
              </Card.Title>
            </Link>
            <Card.Text as="div">{blog.blogCategory}</Card.Text>
            <Card.Text as="p"> {blog.createdAt.substring(0, 10)}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BlogPost;

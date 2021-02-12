import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import Message from "../components/Message";
import { bookmarkBlog, removebookmark } from "../actions/bookmarkActions";

const BookmarksScreen = ({ match }) => {
  const blogId = match.params.id;

  const dispatch = useDispatch();

  const bookmark = useSelector((state) => state.bookmark);
  const { bookmarkItems } = bookmark;

  useEffect(() => {
    if (blogId) {
      dispatch(bookmarkBlog(blogId));
    }
  }, [dispatch, blogId]);

  const removeBookmarkHandler = (id) => {
    dispatch(removebookmark(id));
  };

  const blogImgStyle = {
    objectFit: "cover",
    height: "14vh",
    width: "14vh",
  };
  return (
    <Row>
      <Col md={8}>
        <h1>Bookmarks</h1>
        {bookmarkItems.length === 0 ? (
          <Message>
            No Bookmarks <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {bookmarkItems.map((item) => (
              <ListGroup.Item key={item.blog}>
                <Row>
                  <Col md={2}>
                    <Image
                      style={blogImgStyle}
                      src={item.image}
                      alt={item.title}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={3}>
                    <Link to={`/blog/${item.blog}`}>{item.title}</Link>
                  </Col>
                  <Col md={2}>{item.category}</Col>
                  {/* <Col md={2}>
                
                </Col> */}
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeBookmarkHandler(item.blog)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default BookmarksScreen;

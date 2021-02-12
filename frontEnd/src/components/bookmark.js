import React from "react";
import { useSelector } from "react-redux";
/**
 * @author
 * @function BOOKMARK
 **/

const BOOKMARK = ({ value, color, fontSize }) => {
  const bookmark = useSelector((state) => state.bookmark);
  const { bookmarkItems } = bookmark;

  const blogDetails = useSelector((state) => state.blogDetails);
  const { blog } = blogDetails;

  bookmarkItems.map((item) => {
    if (item.blog === blog._id) {
      return blog._id;
    }
  });
  const bookmarkedItem = blog._id;
  return (
    <div className="bookmark">
      <span>
        <i
          style={{ color, fontSize }}
          className={
            value === bookmarkedItem ? "fas fa-bookmark" : "far fa-bookmark"
          }
        ></i>
      </span>
    </div>
  );
};

BOOKMARK.defaultProps = {
  color: "pink",
  fontSize: "40px",
};

export default BOOKMARK;

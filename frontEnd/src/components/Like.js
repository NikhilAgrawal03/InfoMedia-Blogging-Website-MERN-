import React from "react";

/**
 * @author
 * @function LIKE
 **/

const LIKE = ({ value, text, color, fontSize, display }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color, fontSize, display }}
          className={value > 0 ? "fas fa-thumbs-up" : "far fa-thumbs-up"}
        ></i>
      </span>
      <span>{text ? text : ""}</span>
    </div>
  );
};

LIKE.defaultProps = {
  color: "blue",
  fontSize: "40px",
  display: "inline",
};

export default LIKE;

import axios from "axios";
import {
  BOOKMARK_ADD_BLOG,
  BOOKMARK_REMOVE_BLOG,
} from "../constants/bookmarkConstants";

export const bookmarkBlog = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/blogs/${id}`);

  dispatch({
    type: BOOKMARK_ADD_BLOG,
    payload: {
      blog: data._id,
      title: data.blogTitle,
      image: data.blogImage,
      category: data.blogCategory,
    },
  });

  localStorage.setItem(
    "bookmarkItems",
    JSON.stringify(getState().bookmark.bookmarkItems)
  );
};

export const removebookmark = (id) => (dispatch, getState) => {
  dispatch({
    type: BOOKMARK_REMOVE_BLOG,
    payload: id,
  });

  localStorage.setItem(
    "bookmarkItems",
    JSON.stringify(getState().bookmark.bookmarkItems)
  );
};

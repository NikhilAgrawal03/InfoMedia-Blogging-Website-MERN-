import {
  BOOKMARK_ADD_BLOG,
  BOOKMARK_REMOVE_BLOG,
} from "../constants/bookmarkConstants";

export const bookmarkReducer = (state = { bookmarkItems: [] }, action) => {
  switch (action.type) {
    case BOOKMARK_ADD_BLOG:
      const item = action.payload;

      // const pi = item.blog;

      console.log(item);
      const existItem = state.bookmarkItems.find((x) => x.blog === item.blog);

      if (existItem) {
        return {
          ...state,
          bookmarkItems: state.bookmarkItems.map((x) =>
            x.blog === existItem.blog ? item : x
          ),
        };
      } else {
        return {
          ...state,
          bookmarkItems: [...state.bookmarkItems, item],
        };
      }

    case BOOKMARK_REMOVE_BLOG:
      return {
        ...state,
        bookmarkItems: state.bookmarkItems.filter(
          (x) => x.blog !== action.payload
        ),
      };

    default:
      return state;
  }
};

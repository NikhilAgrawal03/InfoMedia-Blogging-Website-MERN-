import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import BlogPostScreen from "./screens/BlogPostScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
/**
 * @author
 * @function App
 **/

const App = (props) => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/blog/:id" component={BlogPostScreen} />
          <Route path="/bookmark/:id?" component={BookmarksScreen} />
        </Container>
      </main>
    </Router>
  );
};

export default App;

import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import BlogPostScreen from "./screens/BlogPostScreen";
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
        </Container>
      </main>
    </Router>
  );
};

export default App;

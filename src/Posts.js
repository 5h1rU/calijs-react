import React from "react";
import api from "./resource";

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  clickHandler(post) {
    this.props.getPost(post);
  }

  render() {
    return this.props.posts.map(post => {
      return (
        <React.Fragment>
          <h1>{this.props.title}</h1>
          <ul onClick={() => this.clickHandler(post)}>
            <li>{post.id}</li>
            <li>{post.title}</li>
          </ul>
        </React.Fragment>
      );
    });
  }
}

export default Posts;

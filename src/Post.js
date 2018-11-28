import React from "react";
import PostContext from "./context";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <PostContext.Consumer>
          {post => (
            <ul>
              <li>{post.id}</li>
              <li>{post.title}</li>
            </ul>
          )}
        </PostContext.Consumer>
      </>
    );
  }
}

export default Post;

import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search";
import Posts from "./Posts";
import api from "./resource";
import Modal from "./Modal";
import Post from "./Post";
import ErrorBoundary from "./ErrorBoundary";
import PostContext from "./context";
import withTitle from "./withTitle";
import RenderProp from "./RenderProp";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      post: null
    };
  }

  async fetchData() {
    const response = await api("posts");
    this.setState({ posts: response });
    console.log("res", this.state.posts);
  }

  getPost(post) {
    this.setState({ post });
  }

  render() {
    console.log("post", this.state.post);
    const showPost = this.state.post ? (
      <PostContext.Provider value={this.state.post}>
        <RenderProp render={() => <Post title="Algo no se" />} />
      </PostContext.Provider>
    ) : (
      <span>nada</span>
    );
    return (
      <div>
        <Search fetchData={() => this.fetchData()} />
        <ErrorBoundary>
          <PostsWithTitle
            getPost={post => this.getPost(post)}
            posts={this.state.posts}
          />
        </ErrorBoundary>
        <Modal>{showPost}</Modal>
      </div>
    );
  }
}

const PostsWithTitle = withTitle(Posts, "Post titulos");
// const SinglePostTitle = withTitle(Post, "Post single title");

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

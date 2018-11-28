import React from "react";

function withTitle(Component, title) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <Component title={title} {...this.props} />;
    }
  };
}

export default withTitle;

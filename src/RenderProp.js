import React from "react";

class RenderProps extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.render();
  }
}

export default RenderProps;

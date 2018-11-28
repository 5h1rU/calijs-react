import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.inputhander = this.inputhander.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  inputhander(e) {
    this.setState({ value: e.target.value });
  }

  clickHandler(e) {
    e.preventDefault();
    this.props.fetchData();
  }

  render() {
    return (
      <form>
        <input
          onChange={this.inputhander}
          value={this.state.value}
          type="text"
        />
        <button onClick={this.clickHandler}>Buscar</button>
      </form>
    );
  }
}

export default Search;

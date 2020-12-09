import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Archive Page ( {this.props.match.params.article} ) </h2>
        <Link to="/create">Create</Link>
      </div>
    );
  }
}
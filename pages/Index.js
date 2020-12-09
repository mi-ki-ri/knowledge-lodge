import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Index Page</h2>
        <Link to="/create">Create</Link>
      </div>
    );
  }
}

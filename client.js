import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Index from "./pages/Index"
import Create from "./pages/Create"
import Archives from "./pages/Archives"

const app = document.getElementById("app");

ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={Index}></Route>
      <Route path="/archives/:article" component={Archives}></Route>
      <Route path="/create" component={Create}></Route>
    </Layout>
  </Router>,
  app
);

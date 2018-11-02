import React from "react";
// import { Router, Route } from "react-router-dom";
import Landingpage from "./landingpage";
import Aboutme from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";
import resume from "./resume";

import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/aboutme" component={Aboutme} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={resume} />
  </Switch>
);

// class Main extends React.Component {
//   state = {};
//   render() {
//     return (
//       <Router>
//         <Route exact path="/" component={Landingpage} />
//       </Router>
//     );
//   }
// }

export default Main;

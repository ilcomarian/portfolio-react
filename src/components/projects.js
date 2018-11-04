import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
import ReactProject from "./projects/react";
import Node from "./projects/nodejs";
import Rails from "./projects/rails";
import Sinatra from "./projects/sinatra";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  tagleCategories = num => {
    if (num === 0) {
      return <ReactProject />;
    }
    if (num === 1) {
      return <Rails />;
    }
    if (num === 2) {
      return <Node />;
    }
    if (num === 3) {
      return <Sinatra />;
    }
  };

  render() {
    return (
      <div className="demo-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Ruby on Rails</Tab>
          <Tab>Node.js</Tab>
          <Tab>Sinatra Ruby</Tab>
        </Tabs>
        <section>
          <div className="content">
            {this.tagleCategories(this.state.activeTab)}
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;

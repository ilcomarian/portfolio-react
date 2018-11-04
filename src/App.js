import React, { Component } from "react";
import "./App.css";
import { Layout, Navigation, Content, Header, Drawer, Link } from "react-mdl";
import Main from "./components/main";
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="nav-color"
            title={
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                MyPortfolio
              </a>
            }
            scroll
          >
            <Navigation>
              <a href="/contact">Contact</a>
              <a href="/projects">Projects</a>
              <a href="/resume">Resume</a>
            </Navigation>
          </Header>
          <Drawer
            title={
              <a href="/" style={{ textDecoration: "none", color: "black" }}>
                MyPortfolio
              </a>
            }
          >
            <Navigation>
              <a href="/contact">Contact</a>
              <a href="/projects">Projects</a>
              <a href="/resume">Resume</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

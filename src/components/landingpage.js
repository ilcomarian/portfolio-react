import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landingpage extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png" />
            <div>
              <h1 className="banner-text">Full Stack Web Developer</h1>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;

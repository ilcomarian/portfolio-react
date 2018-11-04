import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="resume">
        <Grid className="resume-grid">
          <Cell coll={6}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" />

            <h2>Marian Ilco</h2>
          </Cell>
          <Cell coll={6}>
            <div class="resume-txt">
              <h2>Education</h2>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

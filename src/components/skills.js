import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div>
            {this.props.skills} <ProgressBar progress={this.props.progress} />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;

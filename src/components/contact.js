import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Marian Ilco</h2>
            <img src="https://www.w3schools.com/howto/img_avatar.png" />
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;

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
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Ruby on Rails | React.js | PostgreSQL | Node.js |
                Sinatra Ruby | Express | Git
              </p>
              <div className="social-links">
                {/* linkedin*/}
                <a
                  href="www.google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* github*/}
                <a
                  href="www.google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;

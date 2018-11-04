import React, { Component } from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";
class Sinatra extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ width: "100%" }} className="project-grid">
        <div className="cards">
          <Card shadow={5}>
            <CardTitle
              expand
              style={{
                color: "#fff",
                background:
                  "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
              }}
            >
              Update
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
              convallis.
            </CardText>
            <CardActions border>
              <Button colored>Code</Button>
              <Button colored>Demo</Button>
            </CardActions>
          </Card>
        </div>
        <div className="cards">
          <Card shadow={5}>
            <CardTitle
              expand
              style={{
                color: "#fff",
                background: "url(http://www.getmdl.io/assets/demos/dog.png) "
              }}
            >
              Update
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
              convallis.
            </CardText>
            <CardActions border>
              <Button colored>Code</Button>
              <Button colored>Demo</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default Sinatra;

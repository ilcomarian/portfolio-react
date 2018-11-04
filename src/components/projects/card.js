import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
let card = (background, cardtitle, cardtext) => {
  return (
    <Card shadow={5} style={{ width: "350px", margin: "auto" }}>
      <CardTitle
        style={{
          color: "#fff",
          height: "176px",
          background: { background } + "center / cover"
        }}
      >
        {cardtitle}
      </CardTitle>
      <CardText>{cardtext}</CardText>
      <CardActions border>
        <Button colored>Get Started</Button>
      </CardActions>
      <CardMenu style={{ color: "#fff" }}>
        <IconButton name="share" />
      </CardMenu>
    </Card>
  );
};

// class Card extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() {
//         return (  );
//     }
// }

export default card;

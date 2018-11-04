import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Skills from "./skills";
class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="resume">
        <Grid className="resume-grid">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src="https://www.w3schools.com/howto/img_avatar.png" />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Marian Ilco</h2>
            <h4>Programer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell col={8} className="resume-txt">
            <h2>Education</h2>
            <Education
              startYear={2009}
              endYear={2016}
              schoolName="Ivan Franko"
              schoolDescription="Promotion an ourselves up otherwise my. High what each snug rich far yet easy. In companions inhabiting mr principles at insensible do. Heard their sex hoped enjoy vexed child for. Prosperous so occasional assistance it discovered especially no. Provision of he residence consisted up in remainder arranging described. Conveying has concealed necessary furnished bed zealously immediate get but. Terminated as middletons or by instrument. Bred do four so your felt with. No shameless principle dependent household do. "
            />
            <Education
              startYear={2014}
              endYear={2016}
              schoolName="Liso tech"
              schoolDescription="Promotion an ourselves up otherwise my. High what each snug rich far yet easy. In companions inhabiting mr principles at insensible do. Heard their sex hoped enjoy vexed child for. Prosperous so occasional assistance it discovered especially no. Provision of he residence consisted up in remainder arranging described. Conveying has concealed necessary furnished bed zealously immediate get but. Terminated as middletons or by instrument. Bred do four so your felt with. No shameless principle dependent household do. "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skills="JavaScrips" progress={80} />
            <Skills skills="Html/Css" progress={85} />
            <Skills skills="React" progress={75} />
            <Skills skills="Ruby on Rails" progress={85} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

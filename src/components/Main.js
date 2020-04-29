import React from "react";
import "./Main.css";

import Hero from "./Hero";
import Gallery from "./Gallery";

import theaterBackground from "../assets/theater-background-2.jpg";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSrc: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let formSources = {
      intro: "https://tfaforms.com/4821879",
      plantItForward: "https://www.tfaforms.com/4821886",
      amendment: "https://tfaforms.com/4821403",
      ycyt2: "https://www.tfaforms.com/4821884",
    };

    e.preventDefault();
    console.dir(e.target.alt);
    if (e.target.alt) {
      if (e.target.alt.includes("intro-to-ct")) {
        this.setState({ formSrc: formSources.intro });
      } else if (e.target.alt.includes("plant-it-forward")) {
        this.setState({ formSrc: formSources.plantItForward });
      } else if (e.target.alt.includes("protection-amendment")) {
        this.setState({ formSrc: formSources.amendment });
      } else if (e.target.alt.includes("ycyt-2")) {
        this.setState({ formSrc: formSources.ycyt2 });
      }
    }
  }

  render() {
    return (
      <div className="Main">
        <Hero
          formSrc={this.state.formSrc}
          backgroundImage={theaterBackground}
        ></Hero>
        <div onClick={this.handleClick}>
          <Gallery></Gallery>
        </div>
      </div>
    );
  }
}

export default Main;

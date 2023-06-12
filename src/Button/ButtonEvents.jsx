import React, { Component } from "react";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
confetti();
import { useState } from "react";
import "./ButtonEvents.css";
import { Link } from "react-router-dom";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import FcHome from "react-icons/fc"

/**
 * click celeberation
 */
confetti();
window.addEventListener("click", () => {
  confetti();
});
export default class ButtonEvents extends Component {
  state = {
    y: 0,
    x: 0,
  };

  increment1() {
    this.setState({
      y: this.state.y + 1,
    });
  }
  increment2() {
    this.setState({
      x: this.state.x + 1,
    });
  }
 

  render() {
     const style = {
           color: "black",
       fontSize: "22px",
       paddingBottom :"10px",
     };
    return (
      <div className="center">
        <Link  to="/">
         <FcHome  />
        </Link>
        {/* <button
          className="button blue animated infinite tada"
          onClick={() => {
            this.setState({ x: this.state.x + 1 });
          }}
        >
          {" "}
          <FaThumbsUp style={style} />{" "}
          <span style={style}> {this.state.x}</span>
        </button>{" "}
        <button
          className="button blue animated infinite tada"
          onClick={() => {
            this.setState({ y: this.state.y + 1 });
          }}
        >
          {" "}
          <FcLike style={style} /> <span style={style}> {this.state.y}</span>
        </button>{" "} */}
      </div>
    );
  }
}

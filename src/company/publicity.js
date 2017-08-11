import React from "react";
import publicity from "web_modules/images/publicity.png";

export default class Publicity extends React.Component {
  render() {
    return (
      <div>
        <div className="whiteContent">
          <p className="title">贝纳特宣传册 Brochure</p>
        </div>
        <div className="imgContainer">
          <img src={publicity} />
        </div>
      </div>
    );
  }
}

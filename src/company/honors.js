import React from "react";
import honor from "web_modules/images/honor.png";

export default class Honors extends React.Component {
  render() {
    return (
      <div>
        <div className="whiteContent">
          <p className="title">资质与荣誉 Honor Qualification</p>
        </div>
        <div className="imgContainer">
          <div className="honors01" />
          {/*<img src={honor} />*/}
        </div>
      </div>
    );
  }
}

import React from "react";
import bannerImg1 from "web_modules/images/banner.jpg";
import ps1 from "web_modules/images/ps1@4x.png";
import ps2 from "web_modules/images/ps2@4x.png";
import ps3 from "web_modules/images/ps3@4x.png";

export default class MachineChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { type } = this.props;
    let imgPath = ps1;
    let name = "";
    switch (type) {
      case "MachineChoiceWash":
        imgPath = ps1;
        name = "洗地机";
        break;
      case "MachineChoiceSweep":
        imgPath = ps2;
        name = "扫地机";
        break;
      case "MachineChoiceRub":
        imgPath = ps3;
        name = "擦地机";
        break;
      default:
        break;
    }
    return (
      <div className="productServerContainer">
        <p className="title">{`机器选型-${name}系列`}</p>
        <div
          style={{ marginTop: "-100px", marginBottom: "-100px" }}
          className="productServerBanner"
        >
          <img src={imgPath} />
        </div>
        <div className="textContent">
          洗地机洗地机洗地机洗地机洗地机洗地 机洗地机洗地机洗地机洗地机洗地机洗 地机洗地机洗地机洗地机
        </div>
      </div>
    );
  }
}

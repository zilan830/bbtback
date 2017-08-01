import React from "react";
import bannerImg1 from "web_modules/images/banner.jpg";

export default class MachineChoice extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="productServerContainer">
        <p className="title">机器选型-xx系列</p>
        <div className="productServerBanner">
          <img src={bannerImg1} />
        </div>
        <div className="textContent font-fang-song">
          洗地机洗地机洗地机洗地机洗地机洗地 机洗地机洗地机洗地机洗地机洗地机洗 地机洗地机洗地机洗地机
        </div>
      </div>
    );
  }
}

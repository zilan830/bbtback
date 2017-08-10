import React from "react";
import { Row, Col } from "antd";
import SmallNav from "web_modules/component/smallNav";
import MachineChoice from "./machineChoice";
import Supplies from "./supplies";
import Warranty from "./warranty";
import Malfunction from "./malfunction";

const navColumn = [
  {
    key: 1,
    name: "机器选型",
    selected: true,
    span: 6,
    children: [
      {
        key: 10,
        name: "洗地机系列",
        selected: true,
        component: "MachineChoiceWash"
      },
      {
        key: 11,
        name: "扫地机系列",
        component: "MachineChoiceSweep"
      },
      {
        key: 12,
        name: "擦地机系列",
        component: "MachineChoiceRub"
      }
    ]
  },
  {
    key: 2,
    name: "耗材选购",
    span: 6,
    component: "2",
    children: [
      {
        key: 20,
        name: "洗地机系列",
        component: "SuppliesWash"
      },
      {
        key: 21,
        name: "扫地机系列",
        component: "SuppliesSweep"
      },
      {
        key: 22,
        name: "擦地机系列",
        component: "SuppliesRub"
      }
    ]
  },
  {
    key: 3,
    name: "保修说明",
    span: 6,
    component: "3",
    children: [
      {
        key: 30,
        name: "smart系列",
        component: "WarrantySmart"
      },
      {
        key: 31,
        name: "clever系列",
        component: "WarrantyClever"
      },
      {
        key: 32,
        name: "ranger系列",
        component: "WarrantyRanger"
      },
      {
        key: 33,
        name: "Hussar系列",
        component: "WarrantyHussar"
      },
      {
        key: 34,
        name: "dragoon系列",
        component: "WarrantyDragoon"
      },
      {
        key: 35,
        name: "tornado系列",
        component: "WarrantyTornado"
      },
      {
        key: 36,
        name: "PX&SPX系列",
        component: "WarrantyPX&SPX"
      }
    ]
  },
  {
    key: 4,
    name: "常见故障说明",
    span: 6,
    component: "3",
    children: [
      {
        key: 40,
        name: "smart系列",
        component: "MalfunctionSmart"
      },
      {
        key: 41,
        name: "clever系列",
        component: "MalfunctionClever"
      },
      {
        key: 42,
        name: "ranger系列",
        component: "MalfunctionRanger"
      },
      {
        key: 43,
        name: "hussar系列",
        component: "MalfunctionHussar"
      },
      {
        key: 44,
        name: "dragoon系列",
        component: "MalfunctionDragoon"
      },
      {
        key: 45,
        name: "tornado系列",
        component: "MalfunctionTornado"
      },
      {
        key: 46,
        name: "PX&SPX系列",
        component: "MalfunctionPX&SPX"
      }
    ]
  }
];

const breadColumn = ["产品中心", "洗地机系列"];

const span = {
  nav: 13,
  bread: 11
};

export default class ProductSever extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: "MachineChoiceWash"
    };
  }

  componentDidMount() {}

  onClick = component => {
    this.setState({
      currentComponent: component
    });
  };

  render() {
    const { currentComponent } = this.state;
    return (
      <div className="productSeverContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />
          {currentComponent.indexOf("Machine") > -1
            ? <MachineChoice type={currentComponent} />
            : null}
          {currentComponent.indexOf("Supplies") > -1
            ? <Supplies type={currentComponent} />
            : null}
          {currentComponent.indexOf("Warranty") > -1
            ? <Warranty type={currentComponent} />
            : null}
          {currentComponent.indexOf("Malfunction") > -1
            ? <Malfunction type={currentComponent} />
            : null}
        </div>
      </div>
    );
  }
}

import React from "react";
import {
  message,
  Table,
  Tabs,
  Dropdown,
  Popconfirm,
  Button,
  Modal,
  Icon
} from "antd";
import baseReq from "web_modules/api/base";

export default class EditTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: [],
      featureContent: []
    };
  }

  componentWillMount() {
    const { defaultValue } = this.props;
    this.pushContent(defaultValue);
    console.log("$PARANSwill  ");
  }

  componentWillReceiveProps(props) {
    if (props.defaultValue !== this.props.defaultValue) {
      const { defaultValue } = props;
      this.pushContent(defaultValue);
    }
  }

  pushContent = record => {
    const featureContent = [];
    if (record.advantage && JSON.parse(record.advantage.length) > 0) {
      JSON.parse(record.advantage).forEach((item, index) => {
        featureContent.push(
          <p className="formItem" key={index}>
            <input
              style={{ width: "100%" }}
              type="text"
              name="advantage"
              placeholder="请输入产品特点"
              defaultValue={item}
            />
          </p>
        );
      });
    }
    this.setState({
      defaultValue: record,
      featureContent
    });
  };

  onChange = (e, name) => {
    console.log("$PARANSe", e, "name", name);
    const { defaultValue } = this.state;
    defaultValue[name] = e.target.value;
    this.setState({
      defaultValue
    });
  };

  add = () => {
    const { featureContent } = this.state;
    featureContent.push(
      <p className="formItem">
        <input type="text" name="advantage" placeholder="请输入产品特点" />
      </p>
    );
    this.setState({
      featureContent
    });
  };

  minus = () => {
    const { featureContent } = this.state;
    featureContent.pop();
    this.setState({
      featureContent
    });
  };

  render() {
    const { featureContent, defaultValue } = this.state;
    return (
      <form id="editForm" encType="multipart/form-data">
        <div className="formItem">
          产品名：<input
            onChange={e => {
              this.onChange(e, "goodsName");
            }}
            type="text"
            name="goodsName"
            placeholder="请输入产品名"
            value={defaultValue.goodsName}
          />
        </div>
        <div className="formItem" id="type1">
          产品操作方式：
          <select
            name="type1"
            onChange={e => {
              this.onChange(e, "type1");
            }}
            value={defaultValue.type1}
          >
            <option value="Walk behind">Walk behind</option>
            <option value="ride-on">ride-on</option>
          </select>
        </div>
        <div className="formItem">
          产品类型：
          {defaultValue.type1 === "Walk behind"
            ? <select
                name="type2"
                onChange={e => {
                  this.onChange(e, "type2");
                }}
                value={defaultValue.type2}
              >
                <option value="Small (1470-1650)m²/h">
                  Small (1470-1650)m²/h
                </option>
                <option value="Medium (1750-2640)m²/h">
                  Medium (1750-2640)m²/h
                </option>
                <option value="Multifunctional (650-1100)m²/h">
                  Multifunctional (650-1100)m²/h
                </option>
                <option value="Multifunctional (650-840)m²/h">
                  Multifunctional (650-840)m²/h
                </option>
              </select>
            : <select
                name="type2"
                onChange={e => {
                  this.onChange(e, "type2");
                }}
                value={defaultValue.type2}
              >
                <option value="Small (2500-3200)m²/h">
                  Small (2500-3200)m²/h
                </option>
                <option value="Medium (3900-5100)m²/h">
                  Medium (3900-5100)m²/h
                </option>
                <option value="Medium (4500-7000)m²/h">
                  Medium (4500-7000)m²/h
                </option>
                <option value="Large (6000-7000)m²/h">
                  Large (6000-7000)m²/h
                </option>
              </select>}
        </div>
        <div className="formItem">
          产品型号：<input
            onChange={e => {
              this.onChange(e, "model");
            }}
            type="text"
            name="model"
            placeholder="请输入产品型号"
            value={defaultValue.model}
          />
        </div>
        <div className="formItem">
          产品功率：<input
            onChange={e => {
              this.onChange(e, "power");
            }}
            type="text"
            name="power"
            placeholder="请输入产品功率"
            value={defaultValue.power}
          />
        </div>
        <div className="formItem">
          产品系列：<select
            onChange={e => {
              this.onChange(e, "catId");
            }}
            name="catId"
            value={defaultValue.catId}
          >
            <option value={1}>Tornado系列扫地机</option>
            <option value={2}>Dragoon系列洗地机</option>
            <option value={3}>Ranger系列洗地机</option>
            <option value={4}>Hussar系列洗地机</option>
            <option value={5}>Clever系列洗地机</option>
            <option value={6}>Smart系列洗地机</option>
            <option value={7}>PX系列抛光机</option>
            <option value={8}>SPX系列抛光机</option>
          </select>
        </div>
        <div className="formItem">
          产品使用范围：<input
            onChange={e => {
              this.onChange(e, "goodsRange");
            }}
            type="text"
            name="goodsRange"
            placeholder="请输入产品使用范围"
            value={defaultValue.goodsRange}
            style={{ width: "100%" }}
          />
        </div>
        <div className="formItem">
          产品特点：<input
            onChange={e => {
              this.onChange(e, "feature");
            }}
            type="text"
            name="feature"
            placeholder="请输入产品特点"
            defaultValue={defaultValue.feature}
          />
        </div>
        <div className="formItem">
          产品优势：
          <a href="javascript:void(0)" onClick={this.add}>
            <Icon type="plus" />
          </a>
          <a href="javascript:void(0)" onClick={this.minus}>
            <Icon type="minus" />
          </a>
          {featureContent}
        </div>
        <div className="formItem">
          产品操作说明：
          <div style={{ width: "100px", height: "100px", overflow: "hidden" }}>
            已有图片
            <img src={defaultValue.instruction} />
          </div>
          <div>
            如需更换图片请重新上传
            <input type="file" name="fileInstructionUrl" />
          </div>
        </div>
        <div className="formItem">
          产品主图片：
          <div style={{ width: "100px", height: "100px", overflow: "hidden" }}>
            已有图片
            <img src={defaultValue.imgUrl} />
          </div>
          <div>
            如需更换图片请重新上传
            <input type="file" name="fileImgUrl" />
          </div>
        </div>
        <div className="formItem">
          产品操作讲解视频：
          <div style={{ width: "100px", height: "100px", overflow: "hidden" }}>
            已有视频
            <video
              width="100%"
              height="100%"
              src={defaultValue.videoUrl}
              controls
            >
              Your browser does not support HTML5 video.
            </video>
          </div>
          <div>
            如需更换图片请重新上传
            <input type="file" name="fileVideoUrl" />
          </div>
        </div>
        <div className="formItem">
          案例信息：
          <div style={{ width: "100px", height: "100px", overflow: "hidden" }}>
            已有图片
            <img src={defaultValue.application} />
          </div>
          <div>
            如需更换图片请重新上传
            <input type="file" name="fileApplicationUrl" />
          </div>
        </div>
        {/*<input*/}
        {/*style={{display: "none"}}*/}
        {/*id="reset1"*/}
        {/*type="reset"*/}
        {/*value="Reset"*/}
        {/*/>*/}
      </form>
    );
  }
}

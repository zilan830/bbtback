import React, { PropTypes } from "react";
import { Icon } from "antd";

/**
 * 筛选框顶部的tab切换
 */
export default class TabsFilter extends React.Component {
  //定义属性类型
  static propTypes = {
    itemData: PropTypes.object.isRequired, //数据内容
    handleCallback: PropTypes.func.isRequired //数据传输出去的回调函数
  };

  constructor(props) {
    super(props);
    this.state = {
      allWidth: 0,
      left: 0,
      data: {},
      staticLeft: 0,
      staticRight: 0
    };
  }

  componentDidMount() {
    const data = this.props.itemData;
    this.setState({
      data: data
    });
    this.getWidth();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.itemData !== this.props.itemData) {
      const data = nextProps.itemData;
      this.setState({
        data: data
      });
    }
    this.getWidth();
  }

  getWidth = () => {
    const width = this.ulref.clientWidth;
    const left = this.tabscon.getBoundingClientRect().left;
    const right = this.tabscon.getBoundingClientRect().right;
    this.setState({
      allWidth: width,
      staticLeft: left,
      staticRight: right
    });
  };

  //点击向左
  handleLeft = () => {
    const { left, allWidth } = this.state;
    let newLeft = 0;
    if (left < 0 && allWidth > 618) {
      if (allWidth + left > 1236) {
        newLeft = left + 618;
      }
      this.setState({
        left: newLeft
      });
    }
  };

  //点击向右
  handleRight = () => {
    const { left, allWidth } = this.state;
    let newLeft = -(allWidth - 618);
    if (allWidth + left > 618) {
      if (allWidth + left > 1236) {
        newLeft = left - 618;
      }
      this.setState({
        left: newLeft
      });
    }
  };

  onClick = (index, value) => {
    let { left, allWidth, staticLeft, staticRight } = this.state;
    const offsetLeft = document.getElementById(index).getBoundingClientRect()
      .left;
    const offsetRight = document.getElementById(index).getBoundingClientRect()
      .right;
    const width = document.getElementById(index).getBoundingClientRect().width;
    //点击单个看是否出线
    if (offsetRight > staticRight && allWidth > 618) {
      left = left + offsetLeft - offsetRight;
    } else if (staticLeft > offsetLeft) {
      left = left + offsetRight - offsetLeft;
      if (left < width) left = 0;
    }
    //将点击的数值传给selected;
    const { data } = this.state;
    data.selected = [];
    data.selected.push(value);
    this.props.handleCallback(data);
    this.setState({
      data: data,
      left: left
    });
  };

  renderContent = () => {
    const { data } = this.state;
    let itemContent = [];
    if (data.hasOwnProperty("options")) {
      itemContent = data.options.map((item, index) => {
        return (
          <li
            id={index}
            key={index}
            onClick={() => this.onClick(index, item.value)}
            className={
              data.selected[0] === item.value ? "tabItem selected" : "tabItem"
            }
          >
            {item.label}
          </li>
        );
      });
    }
    return itemContent;
  };

  render() {
    const { left, allWidth } = this.state;
    const itemContent = this.renderContent();
    return (
      <div className="tabsContainer">
        {allWidth > 618
          ? <span
              onClick={this.handleLeft}
              style={
                left === 0
                  ? { color: "rgba(30,48,84,0.40)" }
                  : { color: "rgba(30,48,84,0.80)" }
              }
            >
              <Icon type="left" />
            </span>
          : null}
        <div ref={ref => (this.tabscon = ref)} className="tabsInnerContainer">
          <ul
            ref={ref => (this.ulref = ref)}
            className="tabsUlContainer"
            style={{ left: left }}
          >
            {itemContent}
          </ul>
        </div>
        {allWidth > 618
          ? <span
              onClick={this.handleRight}
              style={
                allWidth + left <= 618
                  ? { color: "rgba(30,48,84,0.40)" }
                  : { color: "rgba(30,48,84,0.80)" }
              }
            >
              <Icon type="right" />
            </span>
          : null}
      </div>
    );
  }
}

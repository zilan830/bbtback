import React from "react";
import {
  message,
  Row,
  Col,
  Table,
  Tabs,
  Dropdown,
  Popconfirm,
  Button,
  Modal,
  Icon
} from "antd";
import { Link } from "react-router";
import baseReq from "web_modules/api/base";
const TabPane = Tabs.TabPane;

export default class ProductCenter extends React.Component {
  constructor(props) {
    super(props);
    this.column = [
      {
        title: "产品名称",
        dataIndex: "goodsName",
        key: "goodsName",
        width: 100
      },
      {
        title: "产品所属类目",
        dataIndex: "type1",
        key: "type1",
        width: 100
      },
      {
        title: "产品属性",
        dataIndex: "type2",
        key: "type2",
        width: 200
      },
      {
        title: "功率",
        dataIndex: "power",
        key: "power",
        width: 100
      },
      {
        title: "产品描述",
        dataIndex: "advantage",
        key: "advantage",
        render(record) {
          let data;
          if (record) {
            data = JSON.parse(record);
          }
          if (data && data.length > 0) {
            let content = data.map((item, index) => {
              const ind = parseInt(index) + 1;
              return (
                <p
                  style={{ background: "white" }}
                  className="line16"
                  key={index}
                >{`${ind}、${item}`}</p>
              );
            });

            content = (
              <div className="hoverShowContainer">
                {content}
              </div>
            );
            return (
              <Dropdown overlay={content}>
                <a href="javascript:void(0)">详情</a>
              </Dropdown>
            );
          } else {
            return <span>暂无数据</span>;
          }
        }
      },
      {
        title: "产品图片",
        dataIndex: "imgUrl",
        key: "imgUrl",
        render(img) {
          if (img) {
            const content = <img className="tableInlineImg" src={img} />;
            return (
              <Dropdown overlay={content}>
                <a href="javascript:void(0)">详情</a>
              </Dropdown>
            );
          } else {
            return <span>暂无数据</span>;
          }
        }
      },
      {
        title: "产品详情视频",
        dataIndex: "videoUrl",
        key: "videoUrl",
        render(video) {
          if (video) {
            const content = (
              <div className="tableInlineImg">
                <video width="100%" height="100%" src={video} controls>
                  Your browser does not support HTML5 video.
                </video>
              </div>
            );
            return (
              <Dropdown overlay={content}>
                <a href="javascript:void(0)">详情</a>
              </Dropdown>
            );
          } else {
            return <span>暂无数据</span>;
          }
        }
      },
      {
        title: "产品详情图片",
        dataIndex: "instruction",
        key: "instruction",
        render(img) {
          if (img) {
            const content = <img className="tableInlineImg" src={img} />;
            return (
              <Dropdown overlay={content}>
                <a href="javascript:void(0)">详情</a>
              </Dropdown>
            );
          } else {
            return <span>暂无数据</span>;
          }
        }
      },
      {
        title: "产品应用案例",
        dataIndex: "application",
        key: "application",
        render(url) {
          let content = [];
          if (url) {
            if (!url.indexOf(".mp4")) {
              content = <img className="tableInlineImg" src={url} />;
            } else {
              content = (
                <div className="tableInlineImg">
                  <video width="100%" height="100%" src={url} controls>
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              );
            }
            return (
              <Dropdown overlay={content}>
                <a href="javascript:void(0)">详情</a>
              </Dropdown>
            );
          } else {
            return <span>暂无数据</span>;
          }
        }
      },
      {
        title: "操作",
        key: "operation",
        render: this.operate
      }
    ];
    this.state = {
      dataList: [],
      newVisible: false,
      featureContent: [],
      type2: 1
    };
  }

  operate = (e, record, index) => {
    return (
      <span>
        <a className="mr5" href="javascript:void(0)">
          编辑
        </a>
        <Popconfirm
          title="确定要删除？"
          onConfirm={this.handleDelete.bind(this, record)}
        >
          <a href="javascript:void(0)">删除</a>
        </Popconfirm>
      </span>
    );
  };

  //删除
  handleDelete = record => {
    console.log("$PARANSrecord", record);
    const id = record.gid;
    baseReq(`/boss/delGoods`, { id: id })
      .then(res => {
        console.log("$PARANSres", res);
      })
      .then(() => {
        this.getTable();
      })
      .catch(err => {
        message.error(err);
      });
  };

  componentDidMount() {
    this.getData(1);
  }

  getData = page => {
    const currentPage = page - 1;
    const url = `/boss/goodsList/${currentPage}/${page * 10}`;
    baseReq(url)
      .then(res => {
        this.setState({
          dataList: res.data,
          total: res.count
        });
      })
      .catch(err => {
        message.error(err);
      });
  };

  showNewForm = () => {
    this.setState({
      newVisible: true
    });
  };

  handleCancel = () => {
    this.setState({
      newVisible: false
    });
  };

  add = () => {
    const { featureContent } = this.state;
    featureContent.push(
      <p className="formItem">
        <input type="text" name="feature" placeholder="请输入产品特点" />
      </p>
    );
    this.setState({
      featureContent
    });
  };

  onSelect = e => {
    const value = e.target.value;
    if (value === "手推式") {
      this.setState({
        type2: 1
      });
    } else {
      this.setState({
        type2: 2
      });
    }
  };

  render() {
    const { dataList, total, featureContent, type2 } = this.state;

    return (
      <div className="contentContainer">
        <Button className="mb10" onClick={this.showNewForm}>
          新建
        </Button>
        <Table
          scroll={{ x: 1500 }}
          columns={this.column}
          dataSource={dataList || []}
          rowKey={record => record.gid}
          Pagination={{
            showQuickJumper: true,
            total: total,
            onChange: (page, pageSize) => {
              this.getData(page, pageSize);
            }
          }}
        />
        <Modal
          title="新建产品表单"
          footer={null}
          visible={this.state.newVisible}
          onCancel={this.handleCancel}
        >
          <form
            action="/boss/addGoods"
            method="post"
            encType="multipart/form-data"
          >
            <p className="formItem">
              产品名：<input type="text" name="goodsName" placeholder="请输入产品名" />
            </p>
            <p className="formItem" id="type1">
              产品操作方式：
              <select name="type1" onChange={this.onSelect}>
                <option value="手推式">手推式</option>
                <option value="驾驶式">驾驶式</option>
              </select>
            </p>
            <p className="formItem">
              产品类型：
              {type2 === 1
                ? <select name="type2">
                    <option value="小型  (1470-1650）m²/h">
                      小型 (1470-1650）m²/h
                    </option>
                    <option value="中型  (1750-2640）m²/h">
                      中型 (1750-2640）m²/h
                    </option>
                  </select>
                : <select name="type1">
                    <option value="小型（2500-3200）m²/h">小型（2500-3200）m²/h</option>
                    <option value="中型（3900-5100）m²/h">中型（3900-5100）m²/h</option>
                    <option value="大型（6000-7000）m²/h">大型（6000-7000）m²/h</option>
                  </select>}
            </p>
            <p className="formItem">
              产品型号：<input type="text" name="model" placeholder="请输入产品型号" />
            </p>
            <p className="formItem">
              产品功率：<input type="number" name="power" placeholder="请输入产品功率" />
            </p>
            <p className="formItem">
              产品系列:
              <select name="catId">
                <option value="1">Tornado系列扫地机</option>
                <option value="2">Dragoon系列洗地机</option>
                <option value="3">Ranger系列洗地机</option>
                <option value="4">Hussar系列洗地机</option>
                <option value="5">Clever系列洗地机</option>
                <option value="6">Smart系列洗地机</option>
                <option value="7">PX系列抛光机</option>
                <option value="8">SPX系列抛光机</option>
              </select>
            </p>
            <p className="formItem">
              产品使用范围：<input
                type="text"
                name="goodsRange"
                placeholder="请输入产品使用范围"
              />
            </p>
            <p className="formItem">
              产品特点:
              <p className="formItem">
                <input type="text" name="feature" placeholder="请输入产品特点" />
              </p>
            </p>
            <p className="formItem">
              产品优势:<a href="javascript:void(0)" onClick={this.add}>
                <Icon type="plus" />
              </a>
              <p className="formItem">
                <input type="text" name="advantage" placeholder="请输入产品特点" />
              </p>
              {featureContent}
            </p>
            <p className="formItem">
              产品操作说明: <input type="file" name="fileInstructionUrl" />
            </p>
            <p className="formItem">
              产品主图片: <input type="file" name="fileImgUrl" />
            </p>
            <p className="formItem">
              产品操作讲解视频：<input type="file" name="fileVideoUrl" />
            </p>
            <p className="formItem">
              案例信息：<input type="file" name="fileApplicationUrl" />
            </p>
            <p className="formItem btn">
              <input type="submit" value="提交" />
            </p>
          </form>
        </Modal>

        {/*<Tabs defaultActiveKey="1">*/}
        {/*<TabPane tab="洗地机系列" key="1">*/}
        {/*<Table*/}
        {/*columns={this.column}*/}
        {/*Pagination={{*/}
        {/*showQuickJumper: true,*/}
        {/*showSizeChanger: true,*/}
        {/*total: total,*/}
        {/*}}*/}
        {/*/>*/}
        {/*</TabPane>*/}
        {/*<TabPane tab="扫地机系列" key="2">Content of Tab Pane 2</TabPane>*/}
        {/*<TabPane tab="擦地机系列" key="3">Content of Tab Pane 3</TabPane>*/}
        {/*</Tabs>*/}
      </div>
    );
  }
}

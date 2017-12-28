import React from "react";
import { Row, Col, Pagination, message, Carousel, Button, Modal } from "antd";
import baseReq from "web_modules/api/base";
import NewDet from "./newDet";
import Edit from "web_modules/component/editor";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInfo: [],
      list: true,
      data: [],
      count: 0,
      canAdd: false
    };
    this.text = "";
  }

  componentDidMount() {
    const { type } = this.props;
    this.getData(type, 1);
  }

  componentWillReceiveProps(Props) {
    console.log("$PARANSProps", Props);

    if (Props.type !== this.props.type) {
      const { type } = Props;
      this.getData(type, 1);
    }

    this.setState({
      list: true
    });
  }

  onClick = id => {
    baseReq(`/news/newsOrExhibitionDetail/${id}`)
      .then(res => {
        console.log("$PARANSres", res);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        message.error(err);
      });
    this.setState({
      list: false
    });
  };

  getData = (type, page) => {
    if (type === "News") {
      baseReq(`/news/newsList/${page}/10`)
        .then(res => {
          console.log("$PARANSres", res);
          this.setState({
            newInfo: res.data,
            count: res.count,
            list: true
          });
        })
        .catch(err => {
          message.error(err);
        });
    } else {
      baseReq(`/news/exhibitionList/${page}/10`)
        .then(res => {
          this.setState({
            newInfo: res.data,
            count: res.count,
            list: true
          });
        })
        .catch(err => {
          message.error(err);
        });
    }
  };

  onChange = (page, pageSize) => {
    console.log("$PARANSpage", page, pageSize);
    const { type } = this.props;
    this.getData(type, page);
  };

  addNew = () => {
    this.setState({
      newVisible: true
    });
  };

  handleCancel = () => {
    this.setState({
      newVisible: false
    });
    window.document.getElementById("reset").click();
  };

  newChange = text => {
    this.text = text;
  };

  pushNew = () => {
    const { type } = this.props;
    const form = window.document.getElementById("newForm");
    const formdata = new FormData(form);
    formdata.append("text", this.text);
    const title = form.title.value;
    const { canAdd } = this.state;
    if (!canAdd || title.length === 0) {
      message.warn("请编辑标题");
    } else {
      // formdata.append("title", this.title);
      if (type === "News") {
        baseReq(`/boss/addNews`, formdata)
          .then(res => {
            this.title = "";
            message.success("添加成功");
            window.document.getElementById("reset").click();
            this.handleCancel();
            this.getData("News", 1);
            this.setState({
              canAdd: false
            });
          })
          .catch(err => {
            message.error(err);
          });
      } else {
        baseReq(`/boss/addExhibition`, formdata)
          .then(res => {
            this.title = "";
            message.success("添加成功");
            window.document.getElementById("reset").click();
            this.handleCancel();
            this.getData("Show", 1);
            this.setState({
              canAdd: false
            });
          })
          .catch(err => {
            message.error(err);
          });
      }
    }
  };

  onBlur = e => {
    if (e.target.value.length > 0) {
      this.title = e.target.value;
      this.setState({
        canAdd: true
      });
    } else {
      message.warn("请编辑标题");
    }
  };

  render() {
    const { type } = this.props;
    const { newInfo, list, count, data } = this.state;
    let content = [];
    let imgContent = [];
    if (newInfo.length > 0) {
      newInfo.map((item, index) => {
        content.push(
          <li key={`new${index}`} className="newsLi">
            <a
              href="javascript:void(0)"
              onClick={() => {
                this.onClick(item.id);
              }}
            >
              {item.title}
            </a>
          </li>
        );
        imgContent.push(
          <div key={`img${index}`}>
            <img src={item.infoImg} />
          </div>
        );
      });
      imgContent = (
        <Carousel autoplay>
          {imgContent}
        </Carousel>
      );
    }
    return (
      <div>
        {list
          ? <Row className="whiteContent">
              <Button onClick={this.addNew} style={{ marginBottom: "20px" }}>
                添加
              </Button>
              <p className="title">
                {type === "News" ? "企业新闻" : "展会风采"} News
              </p>
              <Col span={12} className="mt10">
                <Pagination
                  size="small"
                  total={count}
                  onChange={(page, pageSize) => {
                    this.onChange(page, pageSize);
                  }}
                />
                <ul className="newsUl">
                  {content}
                </ul>
              </Col>
              <Col
                span={12}
                className="mt10"
                style={{ paddingTop: "45px", height: "100%" }}
              >
                {imgContent}
              </Col>
            </Row>
          : <Row className="whiteContent">
              <NewDet type={type} id={1} data={data} refresh={this.getData} />
            </Row>}
        <Modal
          title="新建"
          visible={this.state.newVisible}
          onCancel={this.handleCancel}
          onOk={this.pushNew}
          width={1000}
        >
          <form id="newForm" encType="multipart/form-data">
            <p className="formItem">
              标题：<input
                type="text"
                name="title"
                style={{ width: "100%" }}
                onBlur={this.onBlur}
              />
            </p>
            <p className="formItem">
              添加主图片：<input type="file" name="files" />
            </p>
            <p className="formItem">
              <Edit
                onChange={this.newChange}
                ref={ref => (this.editorDom = ref)}
              />
            </p>
            <input
              style={{ display: "none" }}
              id="reset"
              type="reset"
              value="Reset"
            />
          </form>
        </Modal>
      </div>
    );
  }
}

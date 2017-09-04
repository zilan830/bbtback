import React from "react";
import { Form, Upload, Icon, Modal, Input } from "antd";
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 }
  }
};

class FormDet extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    previewVisible: false,
    previewImage: "",
    fileList: []
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    console.log("$PARANSfile", file);
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => {
    console.log("$PARANSfileList", fileList);
    this.setState({ fileList });
  };

  render() {
    const { data } = this.props.data;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { getFieldDecorator, getFieldValue } = this.props.form;
    return (
      <Form>
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
        <div className="clearfix">
          <Upload
            listType="picture-card"
            fileList={fileList}
            onPreview={this.handlePreview}
            onChange={this.handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            footer={null}
            onCancel={this.handleCancel}
          >
            <img alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </div>
        <FormItem {...formItemLayout} label="上传图片">
          {getFieldDecorator("files", {
            rules: [
              {
                required: true,
                message: "请输入产品编号"
              }
            ]
          })(<Input placeholder="请输入产品编号" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="产品编号">
          {getFieldDecorator("gid", {
            rules: [
              {
                type: "number",
                message: "请输入数字"
              },
              {
                required: true,
                message: "请输入产品编号"
              }
            ]
          })(<Input placeholder="请输入产品编号" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="产品型号">
          {getFieldDecorator("model", {
            rules: [
              {
                type: "string"
              },
              {
                required: true,
                message: "请输入产品型号"
              }
            ]
          })(<Input placeholder="请输入产品型号" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="产品功率">
          {getFieldDecorator("power", {
            rules: [
              {
                type: "string"
              },
              {
                required: true,
                message: "请输入产品功率"
              }
            ]
          })(<Input placeholder="请输入产品功率" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="产品分类">
          {getFieldDecorator("cat_id", {
            rules: [
              {
                type: "number",
                message: "请输入数字"
              },
              {
                required: true,
                message: "请输入产品分类"
              }
            ]
          })(<Input placeholder="1、洗地机系列；2、扫地机系列；3、擦地机系列" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="产品特点">
          {getFieldDecorator("feature", {
            rules: [
              {
                type: "string"
              },
              {
                required: true,
                message: "请输入产品主要特点"
              }
            ]
          })(<Input placeholder="请输入产品主要特点" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="产品优势">
          {getFieldDecorator("advantage", {
            rules: [
              {
                type: "string"
              },
              {
                required: true,
                message: "请输入产品优势"
              }
            ]
          })(<Input placeholder="请输入产品产品优势,同一类型的产品优势须相同" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="操作说明">
          {getFieldDecorator("instruction", {
            rules: [
              {
                type: "number",
                message: "请输入数字"
              },
              {
                required: true,
                message: "请输入商品编号"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="gid">
          {getFieldDecorator("gid", {
            rules: [
              {
                type: "number",
                message: "请输入数字"
              },
              {
                required: true,
                message: "请输入商品编号"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="gid">
          {getFieldDecorator("gid", {
            rules: [
              {
                type: "number",
                message: "请输入数字"
              },
              {
                required: true,
                message: "请输入商品编号"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="gid">
          {getFieldDecorator("gid", {
            rules: [
              {
                type: "number",
                message: "请输入数字"
              },
              {
                required: true,
                message: "请输入商品编号"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="gid">
          {getFieldDecorator("gid", {
            rules: [
              {
                type: "number",
                message: "请输入数字"
              },
              {
                required: true,
                message: "请输入商品编号"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="gid">
          {getFieldDecorator("gid", {
            rules: [
              {
                type: "number",
                message: "请输入数字"
              },
              {
                required: true,
                message: "请输入商品编号"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="gid">
          {getFieldDecorator("gid", {
            rules: [
              {
                type: "number",
                message: "请输入数字"
              },
              {
                required: true,
                message: "请输入商品编号"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="gid">
          {getFieldDecorator("gid", {
            rules: [
              {
                type: "number",
                message: "请输入数字"
              },
              {
                required: true,
                message: "请输入商品编号"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="gid">
          {getFieldDecorator("gid", {
            rules: [
              {
                type: "number",
                message: "请输入数字"
              },
              {
                required: true,
                message: "请输入商品编号"
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="gid">
          {getFieldDecorator("gid", {
            rules: [
              {
                type: "number",
                message: "请输入数字"
              },
              {
                required: true,
                message: "请输入商品编号"
              }
            ]
          })(<Input />)}
        </FormItem>
      </Form>
    );
  }
}

const Det = Form.create()(FormDet);

export default Det;

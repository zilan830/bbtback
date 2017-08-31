import React from "react";
import { Form } from "antd";

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

  render() {
    const { data } = this.props.data;
    return (
      <Form>
        <FormItem {...formItemLayout} label="产品编号">
          {getFieldDecorator("gid", {
            initialValue: data.gid,
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
            initialValue: data.model,
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
            initialValue: data.power,
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
            initialValue: data.cat_id,
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
            initialValue: data.feature,
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
            initialValue: data.feature,
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

const FormDet = Form.create()(FormDet);

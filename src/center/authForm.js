import React from "react";
import { Form, Icon, Input, Select } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;

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
    this.state = {
      add: 0,
      addContent: []
    };
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

    return (
      <Form>
        <FormItem {...formItemLayout} label="请选择大区">
          {getFieldDecorator("areaType", {
            rules: [
              {
                required: true,
                message: "请选择大区"
              }
            ]
          })(
            <Select style={{ width: 200 }}>
              <Option value="1">东北区</Option>
              <Option value="2">华北区</Option>
              <Option value="3">华东区</Option>
              <Option value="4">中南区</Option>
              <Option value="5">西南区</Option>
              <Option value="6">西北区</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="地区">
          {getFieldDecorator(`area`, {
            rules: [
              {
                required: true,
                message: "请输入所在区域"
              }
            ]
          })(<Input placeholder="请输入所在区域" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="公司名">
          {getFieldDecorator(`company`, {
            rules: [
              {
                required: true,
                message: "请输入公司名"
              }
            ]
          })(<Input placeholder="请输入公司名" />)}
        </FormItem>
      </Form>
    );
  }
}

const TecDet = Form.create()(FormDet);

export default TecDet;

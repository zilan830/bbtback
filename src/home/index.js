import React from "react";
import { Form, Icon, Input, Button, message } from "antd";
import axios from "axios";
const FormItem = Form.Item;

class Home extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", { user: values });
        axios({
          method: "post",
          url: `/login/doLogin?name=${values.name}&password=${values.password}`
        })
          .then(res => {
            if (res.data.code === 10000) {
              window.location.href = "#/productCenter";
            } else {
              message.error(res.data.msg);
            }
          })
          .catch(err => {
            console.log("$err", err);
            message.error(err);
          });
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched("name") && getFieldError("name");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");
    return (
      <div className="loginContainer">
        <p className="title">贝纳特登录系统</p>
        <div className="formCon">
          <Form className="login-form" onSubmit={this.handleSubmit}>
            <FormItem
              validateStatus={userNameError ? "error" : ""}
              help={userNameError || ""}
            >
              {getFieldDecorator("name", {
                rules: [{ required: true, message: "请输入用户名" }]
              })(
                <Input
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  placeholder="用户名"
                />
              )}
            </FormItem>
            <FormItem
              validateStatus={passwordError ? "error" : ""}
              help={passwordError || ""}
            >
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "请输入密码" }]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                  type="password"
                  placeholder="密码"
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                disabled={hasErrors(getFieldsError())}
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default (Home = Form.create()(Home));

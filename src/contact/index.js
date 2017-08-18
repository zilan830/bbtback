import React from "react";
import { Row, Col } from "antd";
import SmallNav from "web_modules/component/smallNav";
import contact01 from "web_modules/images/contact01.png";
import contact02 from "web_modules/images/contact02.png";
import contact03 from "web_modules/images/contact03.png";

const navColumn = [
  {
    key: 1,
    name: "联系我们",
    selected: true,
    span: 24
  }
];

const breadColumn = ["联系我们"];

const span = {
  nav: 6,
  bread: 18
};

export default class Contract extends React.Component {
  render() {
    return (
      <div className="contactContainer">
        <div className="contentContainer">
          <SmallNav
            navColumn={navColumn}
            breadColumn={breadColumn}
            span={span}
            change={this.onClick}
          />
          <p className="title mt15">联系我们</p>
          <Row className="whiteContent">
            <Col span={8}>
              <div className="contact01" />
            </Col>
            <Col span={7} className="pl30">
              <p className="font14 textColorGrey line20">地址：江苏昆山市千灯镇季广北路119号</p>
              <p className="font14 textColorGrey line20 mb12">
                Address: No.119 North Jiguang Road, Qiandeng Town, Kunshan City,
                Jiangsu Province, China.
              </p>
              <p className="font14 textColorGrey line20">
                电话 (Tel)：400-775-9100
              </p>
              <p className="font14 textColorGrey line20">
                传真 (Fax)：86 0512 57463631
              </p>
              <p className="font14 textColorGrey line20">
                网址 (web)：http://www.bntfloorcare.com
              </p>
              <p className="font14 textColorGrey line20 pl80">
                http://bntfloorcare.1688.com
              </p>
              <p className="font14 textColorGrey line20 mb12">
                邮箱 (e-mail)：bnt@bntfloorcare.com
              </p>
              <p className="font14 textColorGrey line20">南通工厂:南通邦纳特清洁设备有限公司</p>
              <p className="font14 textColorGrey line20">地址:南通滨海园区启动区北区</p>
            </Col>
            <Col span={7} offset={2}>
              <div className="smallLogoCon">
                <div className="smallLogo">
                  {/*<img src={contact03} />*/}
                </div>
              </div>
              <p className="logoTextCh">昆山市贝纳特机械设备有限公司</p>
              <p className="logoTextEn">
                Kunshan Bennett Cleaning Machine Co.,Ltd.
              </p>
              <p className="logoTel">全国热线 400-775-9100 </p>
              <div className="qrcode">
                <img src={contact02} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

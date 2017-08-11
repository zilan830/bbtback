import React from "react";
import { Row, Col, Tabs, Icon } from "antd";
import authBanner from "web_modules/images/auth1.jpg";
const TabPane = Tabs.TabPane;

export default class Merchants extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="whiteContent">
          <p className="title">招商加盟</p>
        </div>
        <div className="imgContainer">
          <img src={authBanner} />
        </div>
        <div className="productDetInt">
          <Tabs defaultActiveKey="1">
            <TabPane tab="招商政策" key="1">
              <div className="productDetIntCon">
                <p className="title border">贝纳特招商政策</p>
                <Row>
                  <Col span={12}>
                    <img />
                  </Col>
                  <Col span={12}>
                    <p className="sent">1、营销资源：不定期给代理商提供客户数据</p>
                    <p className="sent">2、售后培训：代理商可安排售后人员到工厂进行现场实习</p>
                    <p className="sent">3、 广告支持：厂商一体线上线下联动推广</p>
                    <p className="sent">4、 产品优势：不断研发，提供高品质、高性价比的产品</p>
                    <p className="sent">5、 价格政策：统一的市场价，保障代理商的利润空间</p>
                    <p className="sent">6、 销售激励：设置销售返利政策</p>
                    <p className="sent">7、 区域保护：确保区域内独家经营</p>
                  </Col>
                </Row>
              </div>
            </TabPane>
            <TabPane tab="加盟条件" key="2">
              <div className="productDetIntCon">
                <p className="title">贝纳特品牌加盟条件</p>
                <p className="sent pl38">1、 具有合法资格的企业或具有完全民事行为能力的自然人</p>
                <p className="sent pl38">2、 认同贝纳特品牌经营理念及经营模式</p>
                <p className="sent pl38">3、 遵守贝纳特的市场管理及销售价格政策</p>
                <p className="sent pl38">4、 具有必要的营业面积及完整的组织架构</p>
                <p className="sent pl38">5、 有本行业品牌管理及销售管理经验者优先考虑</p>
              </div>
            </TabPane>
            <TabPane tab="加盟流程" key="3">
              <div className="productDetIntCon">
                <p className="title">加盟贝纳特流程</p>
                <p className="progress">
                  <span className="text">加盟申请</span>
                </p>
                <p className="progress">
                  <span className="arrow" />
                </p>
                <p className="progress">
                  <span className="text">加盟洽谈</span>
                </p>
                <p className="progress">
                  <span className="arrow" />
                </p>
                <p className="progress">
                  <span className="text">加盟签约</span>
                </p>
                <p className="progress">
                  <span className="arrow" />
                </p>
                <p className="progress">
                  <span className="text">正式运行</span>
                </p>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

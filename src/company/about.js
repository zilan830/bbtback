import React from "react";
import { Row, Col } from "antd";
import bennett from "web_modules/images/09.jpg";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div className="backContent">
          <p className="title">公司简介 About bennett</p>
          <p className="mb20">
            昆山市贝纳特机械设备有限公司是一家集研发、制造、分销于一体的综合性清洁设备企业。自2007年成立至今，依托于长江三角经济开发区——昆山市千灯镇这一地理优势，一直致力于提供最优质、最高效、最经济的清洁问题解决方案。
          </p>
          <p className="mb20">
            主营产品有扫地机、洗地机、抛光机等，公司秉承“清洁科技，创造舒适环境”的经营理念，不断进行技术创新、产品优化，满足客户多元化需求。多年来，一直居于行业领先地位。其销售服务类别包括线上线下的互通模式、分销模式、微信轻应用模式等，销售服务网点涵盖国内各大城市，作为拥有“自营进出口权”的企业，产品远销欧洲、南美洲、非洲等多个国家，并通过了CE和ISO9001质量体系认证。公司内部实行ERP统一管理，合理配置资源，为可持续、和谐的企业发展奠定了基础。
          </p>
          <p className="mb20">未来我们将竭诚为清洁领域服务，共建一个与时俱进的洁净世界。</p>
        </div>
        <div className="imgContainer">
          <div className="aboutImg" />
          {/*<img src={bennett} />*/}
        </div>
      </div>
    );
  }
}

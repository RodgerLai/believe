import React, { Component } from 'react';
import './index.scss';

export default class IntroTab extends Component {
  static displayName = 'IntroTab';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  isSelected = (index, target) => (index === target ? 'selected' : ' ');

  clickTab = (event) => {
    let { index } = event.currentTarget.dataset;
    index = parseInt(index, 10);
    if (isNaN(index)) {
      index = 0;
    }
    this.setState({ index });
  };
  render() {
    const { index } = this.state;
    return (
      <div className="scenario-column">
        <h3>热门服务场景</h3>
        <div className="scenario-slider ">
          <div className="scenario-list">
            <div
              data-index="0"
              onClick={this.clickTab}
              className={`scenario-item ${this.isSelected(index, 0)}`}
            >
              <img
                src={require('./images/buKnoKlvQeEzYxttqrFh.svg')}
                alt=""
              />
              <img
                className="selected"
                src={require('./images/MnBlZZrbYBdVvXrCOyfW.svg')}
                alt=""
              />
              <h4>网上商城</h4>
              <p>没有难做的生意</p>
            </div>

            <div
              data-index="1"
              onClick={this.clickTab}
              className={`scenario-item ${this.isSelected(index, 1)}`}
            >
              <img
                src={require('./images/BdPVAfibJHPeFvZIcsTr.svg')}
                alt=""
              />
              <img
                className="selected"
                src={require('./images/NqHbRYuggzIiBJTZOCfa.svg')}
                alt=""
              />
              <h4>行业解决</h4>
              <p>信息平台建设</p>
            </div>

            <div
              data-index="2"
              onClick={this.clickTab}
              className={`scenario-item ${this.isSelected(index, 2)}`}
            >
              <img
                src={require('./images/ZDqQbDUiGLDzygPQIMxp.svg')}
                alt=""
              />
              <img
                className="selected"
                src={require('./images/rHxglRXhjrhTOgRfqrah.svg')}
                alt=""
              />
              <h4>互动营销</h4>
              <p>微信生态覆盖</p>
            </div>
          </div>
        </div>
        <div className="scenario-detail-list bt1px">
          <div className={`scenario-detail-item ${this.isSelected(index, 0)}`}>
            <div className="scenario-detail-left">
              <h4>网上商城</h4>
              <p>
              网上商城开辟了属于自己的稳定的营销渠道，能扩大市场份额，建立连锁、分销的统一电商运营管理系统，同时还可接触最直接消费者，获得第一手产品市场反馈。
              为客户建立符合自身特点的积分管理、VIP管理、客户服务交流管理，商品销售分析系统和已有的进销存(MIS，ERP)互通的数据共享系统等。              </p>
              <ul className="scenario-ability-list">
                <li>
                  <h5 className="ability-title">场景价值</h5>

                  <p className="ability-desc">
                    提供稳定的销售渠道，打通线上线下 <br />维护客户，管理货物，数据分析
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">包含产品能力</h5>

                  <div className="ability-real-row">
                    <span className="circle-item blue-circle">在线销售 </span>
                    <span className="circle-item-spacing" />

                    <span className="circle-item blue-circle">运营管理</span>
                    <span className="circle-item-spacing" />

                    <span className="circle-item blue-circle">活动营销</span>
                    <span className="circle-item-spacing" />
                  </div>
                </li>

                <li>
                  <h5 className="ability-title">关联产品能力</h5>

                  <div className="ability-real-row">
                    <span className="circle-item ">分销</span>
                    <span className="circle-item-spacing" />

                    <span className="circle-item ">安全保障 </span>
                    <span className="circle-item-spacing" />

                    <span className="circle-item ">用户生态圈</span>
                    <span className="circle-item-spacing" />

                    <span className="circle-item ">销售分析</span>
                    <span className="circle-item-spacing" />
                  </div>
                </li>

                <li>
                  <h5 className="ability-title">基本功能</h5>

                  <p className="ability-desc">
                  产品管理、订购管理、订单管理、产品推荐、支付管理、收费管理、送发货管理、会员管理、 连锁店运营管理系统、加盟店运营管理系统等等。
                  </p>
                </li>
              </ul>
            </div>

            <div className="scenario-detail-right">
              <img
                src={require('./images/sangcheng.png')}
                alt=""
              />
            </div>
          </div>

          <div className={`scenario-detail-item ${this.isSelected(index, 1)}`}>
            <div className="scenario-detail-left">
              <h4>
                行业解决
                <a href="" />
              </h4>
              <p>
               包含企业门户、行业数据监控、内外信息网、协同管理软件OA，是企业内部管理、面向新老客户、业界人士及全社会的窗口，是目前最普遍的形式之一。该类网站将企业的日常涉外工作上网，其中包括营销、技术支持、售后服务、物料采购、社会公共关系处理等。该类网站函盖的工作类型多，信息量大，访问群体广。
              </p>
              <ul className="scenario-ability-list">
                <li>
                  <h5 className="ability-title">场景价值</h5>

                  <p className="ability-desc">
                    为行业公司低成本搭建站点，实现行业品牌露出和形象传播；<br />提供专业云端服务，实现信息数据可视化和业务数据操控；<br />
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">包含产品能力</h5>

                  <div className="ability-real-row">
                    <span className="circle-item blue-circle">OA</span>
                    <span className="circle-item-spacing" />
                    <span className="circle-item blue-circle">OSS</span>
                    <span className="circle-item-spacing" />
                    <span className="circle-item blue-circle">监控平台</span>
                    <span className="circle-item-spacing" />
                  </div>
                </li>

                <li>
                  <h5 className="ability-title">关联产品能力</h5>

                  <div className="ability-real-row">
                    <span className="circle-item ">信息传播</span>
                    <span className="circle-item-spacing" />

                    <span className="circle-item ">数据监控</span>
                    <span className="circle-item-spacing" />

                    <span className="circle-item ">数据共享</span>
                    <span className="circle-item-spacing" />
                  </div>
                </li>

                <li>
                  <h5 className="ability-title">基本功能</h5>

                  <p className="ability-desc">
                    覆盖个行业解决方案，提供数据录入、数据可视化、数据分析等功能
                  </p>
                </li>
              </ul>
            </div>

            <div className="scenario-detail-right">
              <img
                src={require('./images/hangye.png')}
                alt=""
              />
            </div>
          </div>

          <div className={`scenario-detail-item ${this.isSelected(index, 2)}`}>
            <div className="scenario-detail-left">
              <h4>
                互动营销
                <a href="" />
              </h4>
              <p>
                结合H5场景、H5游戏、微信小程序、微信公众号，提供多流量入口的互动营销解决方案，具有成本低、开发快、推广易、回报高等特点
              </p>
              <ul className="scenario-ability-list">
                <li>
                  <h5 className="ability-title">场景价值</h5>

                  <p className="ability-desc">
                    覆盖微信端强大的社交生态，高效实现拉新和导流<br />
                  </p>
                </li>

                <li>
                  <h5 className="ability-title">包含产品能力</h5>

                  <div className="ability-real-row">
                    <span className="circle-item blue-circle">小程序</span>
                    <span className="circle-item-spacing" />
                    <span className="circle-item blue-circle">小游戏</span>
                    <span className="circle-item-spacing" />
                    <span className="circle-item blue-circle">微信公众号</span>
                    <span className="circle-item-spacing" />
                    <span className="circle-item blue-circle">H5</span>
                    <span className="circle-item-spacing" />
                  </div>
                </li>

                <li>
                  <h5 className="ability-title">基本功能</h5>

                  <p className="ability-desc">
                   微问卷、微投票、微预定、微相册、微会员、微菜单、微招聘、 微支付<br />
                   自动回复、LBS定位导航、360全景、一键拨号、大转盘、优惠券、留言板等
                    <br />
                    <br />
                    <br />
                  </p>
                </li>
              </ul>
            </div>

            <div className="scenario-detail-right">
              <img
                src={require('./images/hudong.png')}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className={`scenario-actions ${this.isSelected(index, 0)}`}>
          {/* <a className="scenario-action primary" href="#">
            立即接入
          </a>

          <a className="scenario-action secondary" href="#">
            查看接入指南
          </a> */}
        </div>

        <div className={`scenario-actions ${this.isSelected(index, 1)}`}>
          {/* <a className="scenario-action primary" href="#">
            立即接入
          </a>

          <a className="scenario-action secondary" href="#">
            查看接入指南
          </a> */}
        </div>

        <div className={`scenario-actions ${this.isSelected(index, 2)}`}>
          {/* <a className="scenario-action primary" href="#">
            立即接入
          </a>

          <a className="scenario-action secondary" href="#">
            接入指南
          </a> */}
        </div>
      </div>
    );
  }
}

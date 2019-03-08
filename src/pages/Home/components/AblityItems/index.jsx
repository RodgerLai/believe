import React, { Component } from 'react';

export default class AblityItems extends Component {
  static displayName = 'AblityItems';

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div className="hy-ability" style={style.hyAbilityStyles}>
        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/aWimbMGxabytxrRqcnEU.svg')}
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>网站建设</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
          官网建设、行业门户、OA、OSS、<br/>电商、物联网等H5响应式网站
          </p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/neNAdNbBxUbWpbUQIsJA.svg')}
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>APP开发</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
          电商类、医疗类、旅游类、社交类等
          </p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            alt=""
            src={require('./images/SsStefBxcUWayMyktAwz.svg')}
            style={style.hyAbilityItemImgStyle}
          />
          <h3 style={style.hyAbilityItemTitleStyle}>移动开发</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>
          小程序、公众号、手机H5、微商城等
          </p>
        </div>
      </div>
    );
  }
}

const style = {
  hyAbilityStyles: {
    fontFamily: 'Microsoft YaHei',
    height: '223px',
    textAlign: 'center',
    background: '#fff',
  },
  hyAbilityItemStyle: {
    display: 'inline-block',
    width: '280px',
    margin: '38px 35px 0',
    verticalAlign: 'top',
  },
  hyAbilityItemImgStyle: {
    height: '62px',
  },
  hyAbilityItemTitleStyle: {
    fontSize: '20px',
    lineHeight: '26px',
    color: '#333',
    fontWeight: '400',
    margin: '18px 0 10px',
  },
  hyAbilityItemSubtitleStyle: {
    fontSize: '16px',
    color: '#999',
    lineHeight: '21px',
  },
};

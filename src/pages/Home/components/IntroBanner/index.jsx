import React, { Component } from 'react';

export default class IntroBanner extends Component {
  static displayName = 'IntroBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="intro-banner-wrap" style={style.introBannerWrapStyles}>
        <img
          className="intro-banner-img"
          src={require('./images/TB1R9Ius1uSBuNjy1XcXXcYjFXa-3840-900.jpg')}
          style={style.introBannerImgStyles}
          alt=""
        />
        <div
          className="intro-banner-img-mask"
          style={style.introBannerImgMaskStyles}
        />
        <div className="intro-banner-text" style={style.introBannerTextStyles}>
          <h2
            className="intro-banner-title"
            style={style.introBannerTitleStyles}
          >
            提供技术服务，我们是认真的！
          </h2>
          <p
            className="intro-banner-subtitle"
            style={style.introBannerSubtitleStyles}
          >
            <b>网站建设、APP开发、移动开发</b>等，我们提供PC+手机+微信+APP全方位的技术服务<br/>
            <b>网站改版、SEO优化、系统运维、应用功能优化</b>等，我们提供一对一私人定制化的技术开发<br/>
            <b>官网建设、网上商城、互动营销、内外信息网、物联网云端建设</b>等，我们提供各领域专业的解决方案<br/>
          </p>
        </div>
      </div>
    );
  }
}

const style = {
  introBannerWrapStyles: {
    width: '100%',
    height: '450px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introBannerImgStyles: {
    position: 'absolute',
    top: '0',
    left: '50%',
    display: 'block',
    width: '1920px',
    height: '100%',
    transform: 'translateX(-50%)',
    zIndex: '10',
  },
  introBannerImgMaskStyles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    background: '#000',
    opacity: '.45',
    zIndex: '15',
  },
  introBannerTextStyles: {
    position: 'relative',
    zIndex: '99',
    width: '1200px',
    color: '#fff',
  },
  introBannerTitleStyles: {
    fontWeight: '400',
    fontSize: '50px',
    lineHeight: '70px',
  },
  introBannerSubtitleStyles: {
    marginTop: '8px',
    marginBottom: '48px',
    maxWidth: '768px',
    fontSize: '16px',
    lineHeight: '25px',
  },
};

import React, { Component } from 'react';

const LIGHT =
  require('./images/logo_dark.png');
const DARK =
  require('./images/logo_light.png');

export default class Logo extends Component {
  render() {
    const { isDark } = this.props;
    //const logo = isDark ? DARK : LIGHT;
    const logo = DARK;
    return (
      <div
        className="logo"
        style={{
          color: '#f40',
          textAlign: 'left',
        }}
      >
        <a href="/" style={{ display: 'block', position: 'relative' }}>
          <img src={logo} width="200" alt="logo" />
        </a>
      </div>
    );
  }
}

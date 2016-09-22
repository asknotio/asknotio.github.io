import React, { Component } from 'react';

class Action extends Component {

  render() {
    let href = this.props.data.href;
    if (!href)
      href = "#devprogress." + this.props.data.redirect;
    return (
      <a className="btn btn-primary" href={href}>{this.props.data.text}</a>
    );
  }
}

export default Action;

import React, { Component } from 'react';
import './App.css';
import Prompt from './Prompt'

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      prompts: []
    };
    this.setIndex = this.setIndex.bind(this);
  };

  componentDidMount() {
    const hash = document.location.hash.substring(1).split(".");
    const org = hash[0];
    const prompts = require('./json/'+ org + '.json');
    this.setState({prompts:prompts});
    this.setIndex();
    window.addEventListener('hashchange', this.setIndex);
  };

  setIndex(){
    let i = document.location.hash.substring(1).split(".")[1];
    if (!i)
      i = 0;
    this.setState({i:i});
  };

  render() {

    let data = this.state.prompts[this.state.i];
    if (!data)
      return (<div>Unable to find prompt</div>);
    return (
      <div className="container">
        <div className="row">&nbsp;</div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Prompt data={data} />
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 ">
            <p>
              <small>
                <a className="text-muted" href="http://asknot.io/about" target="_blank">asknot.io</a>
              </small>
            </p>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default App;

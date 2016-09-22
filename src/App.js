import React, { Component } from 'react';
import './App.css';
import Prompt from './Prompt'
import firebase from 'firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      prompts: []
    };

    const config = {
      apiKey: "AIzaSyAULx_BUJTfRUiTSXVq0ircdx18lPgo0hE",
      authDomain: "asknotio.firebaseapp.com",
      databaseURL: "https://asknotio.firebaseio.com"
    };
    let firebaseApp = firebase.initializeApp(config);
    const org = document.location.hash.substring(1).split(".")[0];
    this.itemsRef = firebaseApp.database().ref(org);
    this.setIndex = this.setIndex.bind(this);
  };

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      this.setState({prompts: snap.val()});
      this.setIndex();
    });
  };

  componentDidMount() {
    window.addEventListener('hashchange', this.setIndex);
    this.listenForItems(this.itemsRef);
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
      return (<div></div>);
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

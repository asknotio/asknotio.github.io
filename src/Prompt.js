import React, { Component } from 'react';
import Action from './Action'

class Prompt extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">{this.props.data.title}</h4>
          <p className="card-text">{this.props.data.text}</p>
        </div>
        <ul className="list-group list-group-flush">
          {this.props.data.actions.map((action, i) => {
            return (
              <li key={i} className="list-group-item">
                <Action
                  key={i}
                  data={action}
                  onRedirect={this.props.onRedirect}></Action>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Prompt;

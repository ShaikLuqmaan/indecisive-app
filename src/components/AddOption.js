import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleAddOption = (e) => {
    e.preventDefault(); // To ooptmize rendering
    const option = e.target.elements.option.value.trim(); //taeget: form , elements: form elements
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = ' ';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="addOption-error">{this.state.error}</p>
        )}
        <form className="addOption" onSubmit={this.handleAddOption}>
          <input className="addOption__input" type="text" name="option"></input>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

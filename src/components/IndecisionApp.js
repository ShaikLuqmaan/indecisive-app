import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    //options:props.option
    options: [],
    selectedOption: undefined,
  };

  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }));
  };

  buttonClick = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    this.setState(() => ({ selectedOption: option }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Please Enter an Option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'The Option you entered already exist! !';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    const subTitle = 'Put your life in the hands of computer!';

    return (
      <div>
        <Header subTitle={subTitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />

          <div className="widget">
            <Options
              handleRemoveAll={this.handleRemoveAll}
              handleDeleteOption={this.handleDeleteOption}
              options={this.state.options}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          buttonClick={this.buttonClick}
        />
      </div>
    );
  }
}

// IndecisionApp.defaultProps = {
//   options: [],
// };

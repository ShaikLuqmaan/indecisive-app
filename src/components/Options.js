import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header widget-header__title">Your Options are</h3>
      <button className="button button--link" onClick={props.handleRemoveAll}>
        Remove All
      </button>
    </div>

    {props.options.length == 0 && (
      <p className="widgte-header__message">
        Please Add Options to get Started
      </p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={option}
        text={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;

//Functionsl Component Example
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

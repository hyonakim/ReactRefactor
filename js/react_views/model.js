import React from 'react';

let modelTemplate = React.createClass({

let complete = model.isComplete();
let fa = complete ? 'undo' : 'close';
let action = complete ? 'undo' : 'remove';

return (
  <li className='todo'>
    <span className='title'>
      let doTask = this.props.task ? 'complete' : '';
    </span>
    <button classname={this.action} data-id{model.id}>
      <i className='fa fa-{fa}></i>'
    </button>
  );


});

export default modelTemplate;
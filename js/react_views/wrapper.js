import React from 'react';

export default React.createClass({

AddFoodHandler() {
	this.props.submitFood();
},


render() {
  return(
    <div>
      <header>
        <h1>Things Todo</h1>
      </header>
      <main>
        <form className="todo-add">
          <input type="text" name="title" placeholder="Add Something">
          <button><i className="fa fa-plus"></i></button>
        </form>
        <ul className="todo-list"></ul>
      </main>
      <footer>
        <button onClick={this.AddFoodHandler} className="clear">Clear Complete</button>
      </footer>
    </div>
    );
  };
});
import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import parse from './parse_auth';
import {TodoCollection} from './resources';
import {TodoView} from './views';
import React from 'react';
import ReactDom from 'react-dom';

import TodoView from './react-views/react_todo';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': parse.APP_ID,
    'X-Parse-REST-API-Key': parse.API_KEY
  }
});

// let todos = new TodoCollection();

// todos.fetch().then(function() {
  
//   $('.wrapper').html(new TodoView(todos).render().$el);

// });


//******REACT Portion of the Above Code******//

let element = document.querySelector('.wrapper');

let todos = new TodoCollection();
todos.fetch().then(() => {
  this.render(
    <TodoView />,
    this.el
});

console.log('Hello, World');

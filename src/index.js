import $ from 'jquery';
import api from './api';
import './index.css';
import STORE from './store.js';
import bookmarks from './events.js'

function main() {
  console.log('DOM is loaded');

  const startMsg = $('<p>Webpack is working!</p>');
  $('#root').append(startMsg);
}

const main = function () {
  api.getBookmarks()
    .then(res => res.json())
    .then(res => {
      res.forEach(bookmark => STORE.addBookmark(bookmark))
      bookmarks.render()
    })
  bookmarks.bindEventListeners();
};

$(main);
"use strict";

import React from 'react';

import styles from '../styles/App.css';

export default class Nav extends React.Component {
  render () {
    return (
      <ul className="nav">
        <li><a href="https://www.linkedin.com/in/plogan">Patrick's LinkedIn</a></li>
        <li><a href="https://github.com/CaptRat-tiy">Patrick's Github</a></li>
      </ul>
    )
  }
}

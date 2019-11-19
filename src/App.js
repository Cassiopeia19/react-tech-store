import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import {FaHome} from 'react-icons/fa';
import styled from 'styled-components';

class App extends Component {
  render() {
    return <h1>
      hello from tech store<FaHome />
      <Button large>hello styled-components</Button>
      </h1>
  }
}

const color = '#f15025';
const Button = styled.button `
color: white;
background: ${color};

font-size: ${(props) => props.large? '3rem': '1rem'};
`;

export default App;

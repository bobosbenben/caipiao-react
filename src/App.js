import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Button type="primary">button</Button>
      </div>
    );
  }
}

export default App;

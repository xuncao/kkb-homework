import React from 'react';
// import Button from 'antd/es/button'
// import "antd/dist/antd.css"

import { Button } from 'antd';
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'

function App() {
  return (
    <div className="App">
      app
      <Button type="primary">Button</Button>
      <HomePage />
      <FormPage />
    </div>
  );
}

export default App;

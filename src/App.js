import React, { useState, useEffect } from 'react'

import { useGlobalContext } from './context'
import './App.css';

function App() {

	const { msg } = useGlobalContext()

  return (
    <div className="App">
      <h1>{msg}</h1>
    </div>
  );
}

export default App;

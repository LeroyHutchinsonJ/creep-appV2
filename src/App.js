import React from 'react';
import './App.css';
import './InputBox.js';
import InputBox from './InputBox.js';
//The provider connects the store to react
import {Provider} from 'react-redux';
//The store is where all of the state stuff is stored
import {Store} from "redux";


function App() {
  return (
      <div className="App">
         <InputBox/>
          <div className="Details">
            <div>Hey</div>

            </div>
    </div>
  )
}

export default App;

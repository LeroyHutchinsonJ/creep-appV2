import React from 'react';
import './App.css';
import './InputBox.js';
import InputBox from './InputBox.js';
//The provider connects the store to react
import {Provider} from 'react-redux';
//The store is where all of the state stuff is stored
import {createStore} from "redux";

import Details from './Details.js'

const initialState = {
    email:""
}

//Need to learn how to access state

//When the enter key is pressed, the action email should be the new email
function reducer(state = initialState, action)
{
    if(action.type === 'EnterWasPressed')
    {
        return {email:action.email};

    }
    else
    {
        return state;
    }
}

const store = createStore(reducer);


function App() {
  return (
      <Provider store = {store}>

          <div className="App">
          <InputBox/>
              <Details/>
            </div>
      </Provider>

  )
}

export default App;

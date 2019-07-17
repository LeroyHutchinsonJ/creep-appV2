import React from 'react';

class InputBox extends React.Component{
    //This will hold the email address value
    state = {
        email:"",
        text:"",
    }

    //This function checks for when the enter key is pressed and then sets the value in the text field to the email in state
    handleEnterPress = a =>{
            if(a.key === "Enter")
            {
            this.setState({email: this.state.text});
            this.setState({text: ""});

            }
    }

    //This function is going to keep track of the 'text' that the user inputs, by setting the values that the user inputs into the text state
    setText = event =>{
        this.setState({text:event.target.value});
    }
    render(){
         return (
        <div className = "inputComponent">

            <div className="searchBox">

            <input
            className="searchText"
            type="text"
            onChange={this.setText}
            value = {this.state.text}
            placeholder="Type In An Email"
            onKeyPress={this.handleEnterPress}
            />

            <a className="searchBtn" >
            <i className="fas fa-search" />
            </a>
            </div>

        </div>
        )

}

}

export default InputBox;
import React from 'react';
import connect from "react-redux/es/connect/connect";

class InputBox extends React.Component{
    //This will hold the email address value
    state = {
        text:""
    }

    //Create an action type that takes the text when enter is clicked
    onEnterClick =()=>{
        this.props.dispatch(    {type:'EnterWasPressed', email: this.state.text }   )
    }


    //This function checks for when the enter key is pressed and then sets the value in the text field to the email in state
    handleEnterPress = a =>{
            if(a.key === "Enter")
            {
                //When enter is clicked, the store email should be set to text
                this.onEnterClick();

                //Set the state text back to blank
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

//Takes a state var parameter, sets email to state.email
function mapStateToProps(state) {
    return {
        email: state.email
    };
}

//What connect does is it connects input box to redux, hooks into redux takes the state, passes it into mapStateToProps, the return of mapStateToProps gets sent to your component as a prop
export default connect(mapStateToProps)(InputBox);
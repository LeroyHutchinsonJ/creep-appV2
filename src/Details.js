import React from 'react'
import "./App.css"
import connect from "react-redux/es/connect/connect";

//On this component lets try to get the api call to search up someone based on email, then post their name
class Details extends React.Component{
state = {
    personName:""//[MightRemove]

}

//This calls and uses the api to search up someones information
    check = async() => {

    //This gets the response from the server
        var response = await fetch('https://api.fullcontact.com/v3/person.enrich',{
            method: 'POST',
            headers: {
                "Authorization": "Bearer p4RLzkcz9ge9CJhNtVFVd5bv8Q6w0SKp"
            },
            body: JSON.stringify({
                "email": this.props.email,
            })
        });

        //This turns the response into json
        var json = await response.json();

        //This sets the class state to the response[Might remove]
        this.setState({personName: json.fullName});
        console.log(json);

    }






    render() {
        return(<div className= "Details" onClick={this.check()}>
        </div>)
    }
}

//Takes state and picks out what we want from it
var mapStateToProps = (state) =>{
    //Takes out the email from state
    return{
        email:state.email
    };
}
//Looks into redux and passes state to mapStateToProps, that function returns something to details as a prop
export default connect(mapStateToProps)(Details);
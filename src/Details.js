import React from 'react'
import "./App.css"
import connect from "react-redux/es/connect/connect";

class Details extends React.Component{
    render() {
        return(<div className= "Details">Bluh BLAH </div>)
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
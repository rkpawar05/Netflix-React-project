import Component from "react";

class Signup extends Component{
    constructor (props){
        super.props ;
    }

    handleInput(value,key){
        console.log(value,key);
    }

    handleform(){
        console.log("Form Submitted")
    }


    render(){
        <>
        <input name ="username" placeholder="Enter Username" onChange={(data) => this.handleInput(data.target.value, "username")}></input>
    
        </>
    }
}
import React from "react";
// function Cards(props){

//     return (
//     <>



//         <div>

//         <img src= {props.imgsrc}
//         style={{height:150,padding:20,}}
//         alt="card-image"
//         />

//         </div>
    
//         {/* <h3> The Stranger Things </h3> */}

//         </>
//     )
// }

class Cards extends React.Component{
    constructor(props){
        super(props)
    }
    render(){

            return (
                <img src= {this.props.imgsrc} style={{height:150,padding:20,}} alt="card-image"/>
            )
        }
    }


    



export default Cards;
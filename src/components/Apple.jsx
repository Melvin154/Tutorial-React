import React from "react";

class Apple extends React.Component{
    render(){
        const {appleInfo}=this.props;
        const{type,color}=appleInfo;
        return(
            <>
            <p> I am apple and my type is {type} and color is {color}</p>
            
            </>
        )
    }
}


export default Apple;
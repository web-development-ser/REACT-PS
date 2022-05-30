import React, { useState } from "react";

class ClassHello extends React.Component{
   constructor(props) {
       super(props)

       this.state = {color: 'red'};

   }
   render() {
       return(
           <div className="box">
               <div id="title">
                    {this.props.title}

               </div>
           </div>
       )
   }

}

export default ClassHello
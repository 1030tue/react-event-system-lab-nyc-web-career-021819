import React from 'react';

class EyesOnMe extends React.Component{


  handleBlur = () => {
    console.log('Hey! Eyes on me!');

   }

   handleFocus = () => {
    console.log('Good!');
  }

  render(){
    return(
      <button
      type = "password"
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}
      >?</button>
    )
  }
}

export default EyesOnMe;

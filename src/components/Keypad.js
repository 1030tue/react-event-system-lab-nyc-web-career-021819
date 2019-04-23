import React from 'react';

class Keypad extends React.Component{


  handlePassword = (event) => {
    console.log('Entering password...');
  }

  render(){
    return(
      <form action = "">
      <input type="password"
       onKeyUp={this.handlePassword}/>
      </form>
    )
  }
}

export default Keypad

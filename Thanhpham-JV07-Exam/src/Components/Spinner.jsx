import React, { Component } from 'react';
import spinner from "../assets/z3916930128064_138e101463f3b4c563fdc09e9666a054.gif.jpg"
class Spinner extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <>
        <img 
        src={spinner}    
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt='Loading' />
     

        </> );
    }
}
 
export default Spinner;
import React, { Component } from 'react';

import LogoImg from "../assets/1200px-Breaking_Bad_logo.svg.png"
class SearchBox extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 

        let {input,handleOnChange}=this.props
        return ( <>
        {/* {console.log(input,handleOnChange)} */}
        <header className='center'>
      <img src={LogoImg} alt='' />
    </header>
       <section className='search'>

      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={input}
          onChange={handleOnChange}

        //   onChange={(e) => onChange(e.target.value)}
        //   autoFocus
        />
      </form>
    </section>
     
      


        </> );
    }
}
 
export default SearchBox;
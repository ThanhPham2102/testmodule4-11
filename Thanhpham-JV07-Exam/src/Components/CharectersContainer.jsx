import React, { Component } from 'react';
import Result from './Result';
import SearchBox from './Searchbox';
import Spinner from './Spinner';

class CharectersComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        let {dataFilter,input,handleOnChange}=this.props
        return ( <>
        {/* {console.log(input)} */}
        <SearchBox input={input} handleOnChange={handleOnChange}/>
        <Spinner />
        <Result  data={dataFilter}/>
    
        </> );
    }
}
 
export default CharectersComponent;
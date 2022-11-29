import React, { Component } from 'react';
// import resultImg from "../assets/imgResults/messi.jpeg"
class Result extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        let {data}=this.props;
        console.log(data);
        return (<> 
            <div className='cards'>
            {data.map((item,i)=>(
            <a id={item.char_id} className={`card ${item.char_id}`} href='https://www.youtube.com/watch?v=x0fSBAgBrOQ&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q'>
            <div className='card-inner'>
          <div className='card-front'>
            
            <img src={item.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>
              {item.name}
            </h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> 
                {item.portrayed}
                
                 
              </li>
              <li>
                <strong>Nickname:</strong> 
               
                {item.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> 
               
                {item.birthday}
              </li>
              <li>
                <strong>Status:</strong> 
                {item.status}
         
              </li>
            </ul>
          </div>
            </div>
            </a>
  

      
        ))}
        </div></>
           

        
            
          )
    }
}
 
export default Result;
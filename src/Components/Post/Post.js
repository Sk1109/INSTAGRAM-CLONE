import React, { Component } from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import dp1 from '../../images/profilephoto.jpeg'
import postimage from '../../images/profilephoto.jpeg'

class Post extends Component {
    constructor(props){
        super(props);
        this.state={ }

    }
  render() {
    return (
      <div className='post__container'>

         <div className='poast__container'>
            <Avatar className='post__image' src={dp1}/>
            <div className='post__username'>Sourabh_Kumar</div>
         </div>
         <div>
            <img src={postimage} width="610px"/>
         </div>
         <div></div>
         <div></div>
         

      </div>
    )
  }
}

export default Post;
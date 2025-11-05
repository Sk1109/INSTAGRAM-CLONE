import React, {Component} from 'react';
import "./NavBar.css"
import Grid from '@mui/material/Grid';
import insta_logo from "../../images/logoinsta.png"
import home from "../../images/home.svg"
import find from "../../images/find.svg"
import message from "../../images/message.svg"
import react from "../../images/love.svg"
import {Avatar} from '@mui/material';


import dp from "../../images/profilephoto.jpeg"

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = { }

    }
  render() {
    return (
      <div>
        <div className="navbar__barContent">
          <Grid container>

            <Grid item size={2}> 

            </Grid>

            <Grid item size={3}>
              <img className='navbar_logo' src={insta_logo}/>
            </Grid>

            <Grid item size={3}> 
              <input type="text" className='navbar__searchBar' placeholder='Search'/>
            </Grid>

            <Grid item size={3} style={{"display":"flex"}}> 
                <img src={home} className='navbar__image' width={25} />
                <img src={message} className='navbar__image' width={25} />
                <img src={find} className='navbar__image' width={25}/>
                <img src={react} className='navbar__image' width={25}/>
                <Avatar src={dp} className='navbar__image' />



            </Grid>

            <Grid item size={1}>

            </Grid>
            

          </Grid>
        </div>
      </div>
    );
  }
}
export default NavBar;

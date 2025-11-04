import React, {Component} from 'react';
import "./NavBar.css"
import Grid from '@mui/material/Grid';
import insta_logo from "../../images/logoinsta.png"

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

            <Grid item size={6}>
              <img className='navbar_logo' src={insta_logo}/>
            </Grid>

            <Grid item size={4}> 
              <input type="text" placeholder='Search'/>
            </Grid>

            <Grid item size={3} style={{"display":"flex"}}> 
                <img src={home} width="25px" />
                <img src={message} width="25px" />
                <img src={find} width="25px" />
                <img src={react} width="25px" />
            </Grid>
            

          </Grid>
        </div>
      </div>
    );
  }
}
export default NavBar;

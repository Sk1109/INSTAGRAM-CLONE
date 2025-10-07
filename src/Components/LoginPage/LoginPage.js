import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import './LoginPage.css';
import inst_image from '../../images/9364675fb26a.svg'
import inst_logo from '../../images/logoinsta.png'
import fb from '../../images/fb.png'

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = { }

    }
  render() {
    return (
      <div>
        <Grid container>
            <Grid item size={3}> </Grid>
            <Grid item size={6}>
            <div className='loginpage_main'>
               <div>
                 <img src={inst_image} width={450} />
               </div>
               <div> 
                 <div className='loginpage_rightcomponent'>
                    <img className='loginpage_logo' src={inst_logo}/>
                 {/* </div> */}
                 <div className='loginPage__signin'>
                  <input className='loginpage__text' type="text" placeholder='  Phone number, username or email address' /> 
                  <input className='loginpage__text' type="password" placeholder='  Password' />
                  <button className='login__button'>Sign In</button>
                 </div>

                 <div className='login__ordiv'>
                    <div className='login__dividor'></div>
                    <div className='login__or'>OR</div>
                    <div className='login__dividor'></div>
                 </div>

                 <div className="login__fb">
                  <img src={fb}/>Log in with Facebook
                </div>
                <div className="login__forgot">
                  Forgot Password?
                </div>


                 </div>

               </div>
            </div> 
            </Grid>
            <Grid item size={3}> </Grid>
        </Grid>
        
      </div>
    )
  }
}
export default LoginPage;


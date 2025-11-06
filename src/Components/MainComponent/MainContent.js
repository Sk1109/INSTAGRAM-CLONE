import React, {Component} from 'react';
import './MainContent.css'
import { Grid } from '@mui/material';
import StatusBar from '../StatusBar/StatusBar'
import MainPage from '../MainPage/MainPage'

class MainContent extends Component {
    constructor(props){
        super(props);
        this.state = { }

    }
  render() {
    return (
        <div>
        <Grid container>
            <Grid item size={2}></Grid>
            <Grid item size={6}  className="maincontent__container">
                <div>
                    <StatusBar/>
                    <MainPage/>
                </div>
            </Grid>

            <Grid item size={2}>hehe</Grid>  
            <Grid item size={2}>hoho</Grid>  
           
        </Grid>
        </div>
      
    )
  
}
}
export default MainContent;


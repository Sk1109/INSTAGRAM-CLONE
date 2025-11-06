import React, {Component} from 'react'
import './StatusBar.css'
import { Avatar } from '@mui/material'
import statusimg from '../../images/profilephoto.jpeg'

class StatusBar extends Component {
    constructor(props){
    super(props)
    this.state = { }
    }

  render() {
    return (
      <div>
        <div className="statusbar__container">
            <div className="status">
                <Avatar className='statusbar__status' src={statusimg} />
                <div className="statusbar__text">Sourabh</div>
            </div>
            <div className="status">
                <Avatar className='statusbar__status' src={statusimg} />
                <div className="statusbar__text">Sourabh</div>
            </div>
            <div className="status">
                <Avatar className='statusbar__status' src={statusimg} />
                <div className="statusbar__text">Sourabh</div>
            </div>
            <div className="status">
                <Avatar className='statusbar__status' src={statusimg} />
                <div className="statusbar__text">Sourabh</div>
            </div>
            <div className="status">
                <Avatar className='statusbar__status' src={statusimg} />
                <div className="statusbar__text">Sourabh</div>
            </div>
            <div className="status">
                <Avatar className='statusbar__status' src={statusimg} />
                <div className="statusbar__text">Sourabh</div>
            </div>
            <div className="status">
                <Avatar className='statusbar__status' src={statusimg} />
                <div className="statusbar__text">Sourabh</div>
            </div>
            <div className="status">
                <Avatar className='statusbar__status' src={statusimg} />
                <div className="statusbar__text">Sourabh</div>
            </div>
        </div>
      </div>
    )
  }
}
export default StatusBar;


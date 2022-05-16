import { Component } from 'react';
import '../App.css'

class Switch extends Component {
    constructor() {
      super()
    
      this.state = {
         isSwitched: false
      }
    }
    switchLight = () => {
        const { isSwitched } = this.state; 
        this.setState({isSwitched: !isSwitched});
    }
    render() {
        const { isSwitched } = this.state;
        return (
            <div className='switch'>
                {
                    isSwitched ? (
                        <img src="https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png" alt="bulbOn" />
                    ) : (
                        <img src="https://learn.seytech.co/assets/slides/js-intro/assets/lightoff.png" alt="bulbOff" />
                    )
                }
                <button onClick={this.switchLight} className='btn'>Switch</button>
            </div>
        )
    }
}

export default Switch;
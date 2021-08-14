import React, { Component } from 'react'

export default class EVENT_HANDLER_CLASS extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             changedValue : ''
        }
    }
    

    handleOnClick = (e) =>{
        this.setState({
            changedValue : e.target.value
        },() => {
            console.log(e.target.value);
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleOnClick}/>
                <p>{this.state.changedValue}</p>
            </div>
        )
    }
}

import React, { Component } from 'react'

class RLink extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
    youClick = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div className='m-1'>
                <input type="text" ref={this.inputRef} />
                <button onClick={this.youClick}>Ref input</button>
            </div>
        )
    }
}

export default RLink
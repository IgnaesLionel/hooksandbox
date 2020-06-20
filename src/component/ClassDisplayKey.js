import React, { Component } from 'react'

class ClassDisplayKey extends Component {
  constructor(props) {
    super(props)

    this.state = {
      keyCode: null,
    }
  }

handleKeyCode = (e) => {
  this.setState({
    keyCode: e.code
  })
}
componentDidMount() {
  document.addEventListener("keyup",this.handleKeyCode)
}

componentWillUnmount() {
  console.log('je suis dans unmount')
  document.removeEventListener("keyup",this.handleKeyCode)
}

  render() {
    const {keyCode}=this.state

    return (
      <div> {keyCode}</div>
    )
  }
}

export default ClassDisplayKey

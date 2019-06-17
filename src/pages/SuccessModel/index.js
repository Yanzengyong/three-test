import React, { Component } from 'react'
import Viewer from '../../components/viewer'
import './index.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <Viewer color='#FFFFFF' src='assets/other/scene.gltf' />
        </div>
      </div>
    )
  }
}

export default App

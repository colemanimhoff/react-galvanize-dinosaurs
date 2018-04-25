import React from 'react'
import './App.css'
import Header from './components/Header'
import Profiles from './components/Profiles'
import Footer from './components/Footer'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dinosaurs: []
    }
  }

  componentDidMount() {
    fetch('./dinosaurs.json')
    .then(response => response.json())
    .then(profiles => this.setState({ dinosaurs: profiles }))
  }

  render() {
    return ( 
      <div className="App">
        <Header />
        <Profiles dinosaurs={this.state.dinosaurs} />
        <Footer />
      </div>
    )
  }
}

export default App

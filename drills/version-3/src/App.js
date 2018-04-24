import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import InputForm from './components/InputForm'
import JobDetails from './components/JobDetails'
import Footer from './components/Footer'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      listing: {},
      input: '',

    }
  }

  componentDidMount() {
    fetch('./listing.json')
    .then(response => response.json())
    .then(listing => this.setState({listing: listing}))
  }

  render() {
    return (
      <div className="App">
        <Header />
          <main>
            <JobDetails listing={this.state.listing} />
            <InputForm />
          </main>
        <Footer />
      </div>
    )
  }
}

export default App

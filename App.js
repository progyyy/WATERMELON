import React, { Component } from 'react'
import './App.css'
import Log from './log.js'
import Head from './header.js'
import Foot from './footer.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  addArticles = (article) => {
    console.log('articles: ' + article.designation)
  
  }

  render() {
    return (
      <div className="body">
        <Head>
        </Head>
        <Foot>
        </Foot>
      </div>
    )
  }

}

export default App
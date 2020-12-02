import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
  }

  handleLoading = () => {
    console.log(this.props.loading)
    return this.props.loading ? <div>Loading...</div> :  <CatList  catPics={this.props.catPics} />

  }

  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}

export default connect(state => ({catPics: state.cats, loading: state.loading}), { fetchCats })(App)

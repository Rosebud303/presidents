import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAllPresidents from './thunks/getAllPresidents';
import CardContainer from './CardContainer';
import Loader from './Loader'


export class App extends Component {

  componentDidMount() {
    this.props.getAllPresidents('http://localhost:3001/api/v1/presidents')
  }

  render() {
    return (
      <div>
        <h1>Presidents</h1>
        {
          this.props.isLoading === true ?
          <Loader /> :
          <CardContainer />
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) =>({
  isLoading: state.isLoading
})

export const mapDispatchToProps = (dispatch) => ({
  getAllPresidents: (url) => dispatch(getAllPresidents(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

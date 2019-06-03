import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card'
import './CardContainer.css'


export class CardContainer extends Component {
  render() {
    const displayCards = this.props.presidents.map( president => {
      return (
        <Card {...president} key={president.number} />
      )
    })
    return (
      <div className='container'>
        {displayCards}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  presidents: state.presidents
})

export default connect(mapStateToProps)(CardContainer)
import React from 'react';
import './Card.css'

const Card = ({number, president, birth_year, death_year, took_office, left_office, party}) => {
  return (
    <div className='card'>
      <p>Number: {number}</p>
      <p>Name: {president}</p>
      <p>Born: {birth_year}</p>
      <p>Death: {death_year}</p>
      <p>Took Office: {took_office}</p>
      <p>Left Office: {left_office}</p>
      <p>Part: {party}</p>
    </div>
  )
}

export default Card;
//number, president, birth_year, death_year, took_office, left_office, party


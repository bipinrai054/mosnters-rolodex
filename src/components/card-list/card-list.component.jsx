import React from 'react';
import Card from '../card/Card';
import './card-list.styles.css';

function CardList({ monsters }) {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}

export default CardList;

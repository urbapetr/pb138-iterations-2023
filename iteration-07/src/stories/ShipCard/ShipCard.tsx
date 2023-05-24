import React from 'react';
import './shipCard.css';

export interface ShipCardProps {
  shipName: string;
  shipImage: string;
}

export function ShipCard({ shipName, shipImage }: ShipCardProps) {
  return (
    <div className="ship-card ship-card--selected">
      <img src={shipImage} alt="Ship" className="background-image" />
      <div className="ship-card__content">
        <h2 className="ship-card__title">{shipName}</h2>
        <div className="ship-card__selection-icon-wrapper">
          <img src="../assets/selected.svg" alt="Selected icon" className="ship-card__selection-icon" />
        </div>
      </div>
    </div>
  );
}

export default ShipCard;

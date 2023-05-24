import React, { useState } from 'react';
import './item.css';

interface ItemProps {
  itemName: string;
  itemClassification: string;
  itemPrice: number;
  itemDescription: string;
  itemImage: string;
}

export function Item({ itemName, itemClassification, itemPrice, itemDescription, itemImage }: ItemProps) {
  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
  };

  return (
    <div className="item" onClick={toggleDescription}>
      <img src={itemImage} alt="" className="background-image" />
      <div className="item__preview">
        <div className="item__name">
          <h2>{itemName}</h2>
          <h3>{itemClassification}</h3>
        </div>
        <p className="item__price">{itemPrice}</p>
      </div>
      {descriptionVisible && (
        <div className="item__description item__description--enabled">
          <p className="item__description-text">{itemDescription}</p>
        </div>
      )}
    </div>
  );
}

export default Item;

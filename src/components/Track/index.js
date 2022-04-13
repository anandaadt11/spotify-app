import React, { useState } from 'react';



import Button from '../Button';

function Track({ imageUrl, title, artist, toggleSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  }

  return (
    <div>


      <div class="card mb-3" style={{ width: '250px' }}>
        <div class="row g-0">
          <div class="col-md-4" >
            <img src={imageUrl} alt={title} class="img-fluid rounded-start" />
          </div>
          <div class="col-md-8" >
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text" style={{ margin: '0px 0px 20px 0px' }}>{artist}</p>
              <Button variant={isSelected ? 'primary' : 'secondary'} onClick={handleToggleSelect}>{isSelected ? 'Deselect' : 'Select'}</Button>
            </div>
          </div>
        </div>
      </div>


    </div >

  );
}


export default Track;
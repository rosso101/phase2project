import React, { useState } from 'react';

function HouseListingForm() {
  const [houseName, setHouseName] = useState('');
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to a server.
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameInput">House Name:</label>
          <input
            type="text"
            id="nameInput"
            required
            value={houseName}
            onChange={(e) => setHouseName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="locationInput">Location:</label>
          <input
            type="text"
            id="locationInput"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bedroomsInput">Number of Bedrooms:</label>
          <input
            type="number"
            id="bedroomsInput"
            required
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bathroomsInput">Number of Bathrooms:</label>
          <input
            type="number"
            id="bathroomsInput"
            required
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="priceInput">Price:</label>
          <input
            type="number"
            id="priceInput"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imageInput">Image URL:</label>
          <input
            type="text"
            id="imageInput"
            required
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <button type="submit">SELL</button>
      </form>
    </div>
  );
}

export default HouseListingForm;

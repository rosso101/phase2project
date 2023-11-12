import React, { useState, useEffect } from 'react';

const ListItems = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual endpoint you want to fetch data from
    fetch('https://victor-4ot8.onrender.com/properties')
      .then((response) => response.json()) // Use response.json() to parse JSON data
      .then((data) => {
        setProperties(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log('Properties:', properties);

  return (
    <div>
      <h1>Property List</h1>
      <ul>
        {properties.map((property, index) => (
          <li key={index}>
            <h2>{property.name}</h2>
            <p>Type: {property.type}</p>
            <p>Location: {property.location}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Price: ${property.price}</p>
            <p>Available: {property.available ? 'Yes' : 'No'}</p>
            <img
              src={property.image}
              alt={property.name}
              style={{ maxWidth: '100px' }}
            />
            <button>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;

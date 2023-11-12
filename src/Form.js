import React, { useState } from 'react';

const Form = () => {
  const [propertyData, setPropertyData] = useState({
    name: '',
    location: '',
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
    available: false,
    image: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setPropertyData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? !prevData.available : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'your-api-endpoint' with the actual endpoint you want to send the data to
    fetch('https://victor-4ot8.onrender.com/properties', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(propertyData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Property added successfully:', data);
        // Optionally, you can reset the form or perform other actions after successful submission
      })
      .catch((error) => console.error('Error adding property:', error));
  };

  return (
    <div>
      <h2>Add a Property</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={propertyData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Location:
          <input type="text" name="location" value={propertyData.location} onChange={handleChange} />
        </label>
        <br />
        <label>
          Bedrooms:
          <input type="number" name="bedrooms" value={propertyData.bedrooms} onChange={handleChange} />
        </label>
        <br />
        <label>
          Bathrooms:
          <input type="number" name="bathrooms" value={propertyData.bathrooms} onChange={handleChange} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" value={propertyData.price} onChange={handleChange} />
        </label>
        <br />
        <label>
          Available:
          <select name="available" value={propertyData.available} onChange={handleChange}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" name="image" value={propertyData.image} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default Form;

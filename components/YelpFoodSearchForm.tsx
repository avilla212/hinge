'use client';

import { useState } from 'react';

interface Business {
  name: string;
  address: string;
  rating: number;
  image_url: string;
}

export default function YelpSearchForm() {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [results, setResults] = useState<Business[]>([]);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    

    try {
      const res = await fetch('/api/yelp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, location }),
      });

      const data = await res.json();

      if (data.results) {
        setResults(data.results);
        setError('');
      } else {
        setError('No results found.');
        setResults([]);
      }
    } catch (err) {
      setError('Something went wrong.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <form onSubmit={handleSearch} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Enter location (e.g. San Diego)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          style={{ padding: '0.5rem', marginRight: '1rem', width: '200px' }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={{ padding: '0.5rem', marginRight: '1rem' }}
        >
          <option value="">Select Category</option>
          <option value="sushi">Sushi</option>
          <option value="burgers">Burgers</option>
          <option value="dessert">Dessert</option>
          <option value="coffee">Coffee</option>
          <option value="mexica">Mexican</option>
          <option value="vegan">Vegan .. gross</option>
        </select>

        <button type="submit" style={{ padding: '0.5rem 1rem' }}>Search</button>
      </form>

      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

      {results.length > 0 && (
        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {results.map((biz, index) => (
            <div key={index} style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '1rem' }}>
              <img src={biz.image_url} alt={biz.name} style={{ width: '100%', borderRadius: '8px' }} />
              <h3 style={{ margin: '0.5rem 0' }}>{biz.name}</h3>
              <p>{biz.address}</p>
              <p><strong>Rating:</strong> {biz.rating} ⭐</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

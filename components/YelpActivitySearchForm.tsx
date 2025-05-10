"use client";

import { useState } from "react";

interface Activity {
  name: string;
  address: string;
  rating: number;
  image_url: string;
}

export default function YelpActivitySearchForm() {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [results, setResults] = useState<Activity[]>([]);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/yelp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, location }),
      });

      const data = await res.json();

      if (data.results) {
        // set results
        setResults(data.results);
        // set error to empty string
        setError("");
      } else {
        setError("No results found.");
      }
    } catch (err: any) {
      console.error("Error fetching data from Yelp API:", err);
      setError("Failed to fetch data from Yelp API");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <form onSubmit={handleSearch} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Enter location (e.g. San Diego)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          style={{ padding: "0.5rem", marginRight: "1rem", width: "200px" }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={{ padding: "0.5rem", marginRight: "1rem" }}
        >
          <option value="">Select Category</option>
          <option value="hiking">Hiking</option>
          <option value="beach">Beach</option>
          <option value="museum">Museum</option>
          <option value="park">Park</option>
          <option value="amusement park">Amusement Park</option>
          <option value="zoo">Zoo</option>
          <option value="aquarium">Aquarium</option>
          <option value="theater">Theater</option>
          <option value="concert">Concert</option>
        </select>

        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Search
        </button>
      </form>

      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

      {results.length > 0 && (
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {results.map((biz, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                borderRadius: "12px",
                padding: "1rem",
              }}
            >
              <img
                src={biz.image_url}
                alt={biz.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ margin: "0.5rem 0" }}>{biz.name}</h3>
              <p>{biz.address}</p>
              <p>
                <strong>Rating:</strong> {biz.rating} ⭐
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

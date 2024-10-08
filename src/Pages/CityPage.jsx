import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import "./CityPage.css";
import Part1nav from "../Components/Part1nav";
import Part4foot from "../Components/Part4foot";

function CityPage() {
  const { cityId } = useParams();
  const [adventures, setAdventures] = useState([]);
  const [filteredAdventures, setFilteredAdventures] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDuration, setFilterDuration] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); // For handling loading state
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net/api/v1/adventures?city=${cityId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching data");
        return res.json();
      })
      .then((data) => {
        setAdventures(data);
        setFilteredAdventures(data);
        setLoading(false); // Data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false); // Stop loading on error
      });
  }, [cityId]);

  const handleSearch = () => {
    const results = adventures.filter(adventure =>
      adventure.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAdventures(results);
  };

  const handleFilter = () => {
    let filtered = adventures;

    if (filterDuration) {
      const [min, max] = filterDuration.split("-");
      filtered = filtered.filter(adventure => adventure.duration >= min && adventure.duration <= max);
    }

    if (filterCategory) {
      filtered = filtered.filter(adventure => adventure.category === filterCategory);
    }

    setFilteredAdventures(filtered);
  };

  const handleAdventureClick = (adventureId) => {
    navigate(`/adventure/${adventureId}`);
  };

  if (loading) {
    return <div>Loading adventures...</div>; // Loading indicator
  }

  if (error) {
    return <Navigate to="/error" replace />; // Redirect to error page on failure
  }

  return (
    <div>
      <Part1nav />
      <h1 id="ch1">Explore all adventures</h1>
      <p id="cp">Here's a list of places that you can explore in the city</p>
      <hr />
      <br />
      <select
        className="select"
        onChange={(e) => setFilterDuration(e.target.value)}
        value={filterDuration}
        style={{ height: '40px', width: '200px', marginLeft: '30px' }}
      >
        <option value="">Filter by Duration (Hours)</option>
        <option value="0-2">0-2 Hours</option>
        <option value="2-6">2-6 Hours</option>
        <option value="6-12">6-12 Hours</option>
        <option value="12-99">12+ Hours</option>
      </select>

      <select
        className="select"
        onChange={(e) => setFilterCategory(e.target.value)}
        value={filterCategory}
        style={{ height: '40px', width: '200px', marginLeft: '30px' }}
      >
        <option value="">Add Category</option>
        <option value="Cycling">Cycling</option>
        <option value="Hiking">Hiking</option>
        <option value="Beach">Beach</option>
        <option value="Party">Party</option>
      </select>

      <input
        id="cs"
        placeholder="Search adventures"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleFilter}>Apply Filters</button>
      <br /><br />
      <hr />

      <div className="adventure-grid" style={{ height: '1000px', marginTop: '40px' }}>
        {filteredAdventures.length === 0 ? (
          <p>No adventures found</p> // Fallback if no results
        ) : (
          filteredAdventures.map((adventure) => (
            <div
              key={adventure.id}
              className="adventure-card"
              onClick={() => handleAdventureClick(adventure.id)}
            >
              <button id="acat" style={{ marginLeft: '160px', marginTop: '-20px' }}>
                {adventure.category}
              </button>
              <img
                src={adventure.image}
                alt={adventure.name}
                className="adventure-img"
                style={{ height: '150px', width: '100%' }}
              />
              <p id="aname" style={{ marginTop: '-20px' }}>{adventure.name}</p>
              <p id="acost" style={{ marginTop: '-25px' }}>Rs.{adventure.costPerHead}</p>
              <p id="adur">Duration: {adventure.duration} hours</p>
            </div>
          ))
        )}
      </div>
      <Part4foot />
    </div>
  );
}

export default CityPage;

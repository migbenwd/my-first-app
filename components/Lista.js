import React, { useState, useEffect } from "react";

function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries"
        ); // Replace with your API endpoint
        const data = await response.json();
        setCountries(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.iso2}>{country.country}</li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;

import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]); // Initialize plants state with an empty array
  const [searchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlants(data);
      });
  }, []); // Empty dependency array ensures it runs only once on mount

  function onPlantSubmit(newPlant) {
    setPlants([...plants, newPlant]); // Update plants state
  }

  return (
    <main>
      <NewPlantForm onPlantSubmit={onPlantSubmit} />
      <Search searchInput={searchInput} />
      <PlantList plants={plants} /> {/* Pass plants data to PlantList */}
    </main>
  );
}

export default PlantPage;

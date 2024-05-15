import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} /> // Assuming `plant` has an `id` property
      ))}
    </ul>
  );
}

export default PlantList;

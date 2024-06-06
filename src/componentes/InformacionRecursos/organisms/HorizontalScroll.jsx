import React, { useState, useEffect } from "react";
import CardMolecule from "../molecules/Card";
import "./HorizontalScroll.css";

const HorizontalScroll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulación de llamada a una API
    const fetchData = async () => {
      const apiData = [
        {
          image:
            "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/769.jpg",
          description: "Weightlifting Basic",
          info: "6 Workouts for Beginner",
        },
        {
          image:
            "https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/770.jpg",
          description: "Cardio Essentials",
          info: "5 Exercises for a Healthy Heart",
        },
        // Agrega más elementos según sea necesario
      ];
      setData(apiData);
    };

    fetchData();
  }, []);

  return (
    <div className="horizontal-scroll">
      {data.map((item, index) => (
        <CardMolecule
          key={index}
          image={item.image}
          description={item.description}
          info={item.info}
        />
      ))}
    </div>
  );
};

export default HorizontalScroll;

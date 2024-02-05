import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Content from "./Content";
import cars from "../cars.js";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <h1>Vehicles</h1>
      <div className="cardsInARow">
        {cars.map((car) => (
          <Card
            key={car.id}
            name={car.name}
            vites={car.vites}
            size={car.size}
            img={car.img}
            dailyprice={car.dailyprice}
            price={car.price}
            saving={car.saving}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;

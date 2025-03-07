import "./styles.css";
import { useState, useEffect } from "react";

function Coffees() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) =>  setCoffees(data.coffees) );
  }, []);

  return (
    <div className="coffeeCard">
      <img src={coffees.image} alt={coffees.description} />

      <div className="tag">
        <p className="tag">{coffees.tags}</p>
      </div>

      <h2>{coffees.title}</h2>

      <p className="desc">{coffees.description}</p>

      <div className="preco">
        <p>
          R$ <span>{coffees.price}</span>
        </p>

        <div className="actions">
          <div className="counter">
            <img src="./images/menos.png" alt="" />
            <p>1</p>
            <img src="./images/mais.png" alt="" />
          </div>

          <button>
            <img src="./images/compra.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Coffees;

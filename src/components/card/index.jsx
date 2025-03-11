import "./styles.css";
import coffee from "../../../public/images/coffees/americano.png";
import { Shoppingcart } from "lucide-react";

export function Card() {
 
  return (
   <div id="card">
    <img src={coffee} alt="" />
    <span className="tag">tradicional</span>
    <h1>Expresso Tradicional</h1>
    <p className="description">O tradicional café com água quente e grãos moídos</p>
    <div>
      <p className="price">
        R$ <strong>9,90</strong>
      </p>

      <div id="quantityButtons">
        <button type="button">-</button>
        <span>1</span>
        <button type="button">+</button>
      </div>
      <button type="button" className=""> </ShoppingCart ></button>
    </div>
   </div>
  );
}



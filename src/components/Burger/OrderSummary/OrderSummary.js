import React from "react";
import Auxs from "../../../hoc/Auxs";
import Button from "../../UI/Button/Button"

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxs>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul> 
          {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button btnType ="Danger" clicked={props.purchaseCanceled} >CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued} >CONTINUE</Button>
    </Auxs>
  );
};

export default OrderSummary;

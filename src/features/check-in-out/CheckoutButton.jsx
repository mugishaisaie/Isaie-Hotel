import React from "react";
import Button from "../../ui/Button";
import useCheckout from '../check-in-out/useCheckout.js'

function CheckoutButton({ bookingId }) {
  const {checkout,isCheckingOut} = useCheckout()
  return (
    <Button variation="primary" size="small" disabled={isCheckingOut} onClick={()=>checkout(bookingId)}>
      Check out
    </Button>
  );
}


export default CheckoutButton
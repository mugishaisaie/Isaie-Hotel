import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import CheckBox from '../../ui/Checkbox'
import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";
import useCheckin from "./useCheckin";
import useSettings from "../settings/useSetting";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid,setConfirmPaid] = useState(false)
  const [addBreakfast,setAddbreakfast] = useState(false)
  const moveBack = useMoveBack();
const {booking,isLoading} = useBooking()  
  const {checkin,isCheckin} = useCheckin();
  const {settings} = useSettings()
  useEffect(()=>{
    setConfirmPaid(booking?.isPaid?? false)
  },[booking])
  
  if(isLoading)return <Spinner />
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;
const optionalBreakfastPrice= settings?.breakfastPrice * numGuests* numNights;
  function handleCheckin() {
    if(!confirmPaid) return;

    if(addBreakfast){
    checkin({
      bookingId,
      breakfast:{
        hasBreakfast:true,
        extrasPrice: optionalBreakfastPrice,
        totalPrice: totalPrice + optionalBreakfastPrice

      }
    })
    }else{
      checkin({bookingId,breakfast: {}});

    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
    {!hasBreakfast && <Box> 
      <CheckBox checked={addBreakfast} onChange={()=>{
        setAddbreakfast(add=>!add);
        setConfirmPaid(false);
      }} id="breakfast" disabled={addBreakfast || isCheckin}>
  Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
      </CheckBox>
    </Box>}
    <Box> 
      <CheckBox checked={confirmPaid} onChange={(e)=>setConfirmPaid((confirm)=>!confirm)} id="confirm" disabled={confirmPaid || isCheckin}>
i confirm that {guests.fullName} has paid the total amount of {!hasBreakfast ? formatCurrency(totalPrice) : `${formatCurrency(totalPrice + optionalBreakfastPrice)} which is )`
}
      </CheckBox>
    </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckin}>Check in booking #{bookingId}</Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;

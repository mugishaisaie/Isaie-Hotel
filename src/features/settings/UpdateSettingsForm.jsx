
import React from 'react';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useSettings from './useSetting';
import Spinner from '../../ui/Spinner'
import useUpdateSetting from './useUpdateSetting';

function UpdateSettingsForm() {
  const {isLoading,settings:{minBookingLength,maxBookingLength,maxGuestsPerBooking,breakfastPrice}={}} = useSettings()
  // console.log(breakfastPrice)
  const {isUpdating,updateSetting} = useUpdateSetting();
  function handleUpdate(e,field){
    const {value} = e.target;
    console.log(value)
    if(!value)return
    updateSetting({[field]: value})
  }
  if(isLoading) return <Spinner />
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength} onBlur={(e)=>handleUpdate(e,"minBookingLength")} disabled={isUpdating} />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} onBlur={(e)=>handleUpdate(e,"maxBookingLength")} disabled={isUpdating}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestsPerBooking} onBlur={(e)=>handleUpdate(e,"maxGuestsPerBooking")} disabled={isUpdating}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} onBlur={(e)=>handleUpdate(e,"breakfastPrice")} disabled={isUpdating}/>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;

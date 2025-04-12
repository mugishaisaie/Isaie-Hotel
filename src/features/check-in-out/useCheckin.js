import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useNavigate, useNavigation } from 'react-router';
import { updateBooking } from '../../services/apiBookings';
import toast from 'react-hot-toast';

function useCheckin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const {mutate:checkin,isLoading:isCheckin} = useMutation({
        mutationFn: ({bookingId,breakfast})=>updateBooking(bookingId,{
            status:'checked-in',
            isPaid: true,
            ...breakfast
        }),
        onSuccess: (data)=>{
            toast.success(`Bookind # ${data.id} successfully checked in`);
            queryClient.invalidateQueries({active: true});
            navigate("/")
        },
        onError: ()=>toast.error("there was an error while checking in")
    })
  return {checkin,isCheckin}
}

export default useCheckin

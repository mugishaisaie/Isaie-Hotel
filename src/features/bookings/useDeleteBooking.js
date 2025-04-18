import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import toast from 'react-hot-toast';
import { deleteBooking } from '../../services/apiBookings';

function useDeleteBooking() {
    const queryClient  = useQueryClient();
     const {isLoading:isDeleting,mutate:deleteBookings}= useMutation({
      
        mutationFn:deleteBooking,
        onSuccess: ()=>{
          toast.success("Booking successfully Deleted");
          queryClient.invalidateQueries({
            queryKey: ['bookings']
          })
        },
        onError:(err)=>toast.error(err.message)
      })
  return {isDeleting,deleteBookings}
    
}

export default useDeleteBooking;

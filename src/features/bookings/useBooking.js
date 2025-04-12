import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getBooking } from '../../services/apiBookings'
import { useParams } from 'react-router'

function useBooking() {
  const {bookingId} = useParams();

    const {isLoading,data:booking, error} = useQuery({
        queryKey: ['booking',bookingId],
        queryFn: ()=>getBooking(bookingId),
        retry: false,
    })
  return {isLoading,booking, error}
}

export default useBooking

import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import React from 'react'
import { useSearchParams } from 'react-router'
import { getBookingsAfterDate } from '../../services/apiBookings';

function useRecentBookings() {
    const [searchParams] = useSearchParams();

    const numDays = !searchParams.get("last") ? 7: Number(searchParams.get("last"));

    const queryDate = subDays(new Date(),numDays).toISOString();

    const {data:bookings,isLoading,error} = useQuery({
        queryKey:["bookings",`last-${numDays}`],
        queryFn: ()=>getBookingsAfterDate(queryDate)
    })
  return{bookings,isLoading,error}
}

export default useRecentBookings
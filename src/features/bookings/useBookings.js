import {  useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import getBookings from '../../services/apiBookings'
import { useSearchParams } from 'react-router';
import { PAGE_SIZE } from '../../utils/constant';

function useBookings() {
    // FILTER BOOKINGS BY STATUS
    const [searchParams] = useSearchParams();
    const filterValue = searchParams.get("status");

    const queryClient = useQueryClient();

    const filter =!filterValue || filterValue ==="all"? null : {field:"status",value:filterValue} 

    // SORT BOOKINGS BY DATE OR PRICE
    const sortByValue = searchParams.get("sortBy")||"startDate-desc";
    const [field,direction] = sortByValue.split("-");
    const sortBy = {field,direction}

    // PAGINATION
    const page = !searchParams.get("page") ? 1  : Number(searchParams.get("page"));
    const {isLoading,data: {data: bookings,count}={},error}= useQuery({
        queryKey:['bookings',filter,sortBy,page],
        queryFn: ()=>getBookings({filter,sortBy,page})
    })
// PRE-FETCHING
const pageCount = Math.ceil(count / PAGE_SIZE)
if(page < pageCount)
queryClient.prefetchQuery({
  queryKey:['bookings',filter,sortBy,page +1],
        queryFn: ()=>getBookings({filter,sortBy,page: page +1})
  

})
if(page > 1)
queryClient.prefetchQuery({
  queryKey:['bookings',filter,sortBy,page -1],
        queryFn: ()=>getBookings({filter,sortBy,page: page -1})
  

})
//     const bookings = data?.data ?? [];
// const count = data?.count ?? 0;
  return {bookings,isLoading,error,count}
}

export default useBookings

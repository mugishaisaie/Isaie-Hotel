import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getStaysTodayActivity } from '../../services/apiBookings'

function useTodayActivity() {
    const {data:activities,isLoading} = useQuery({
        queryKey: ['today-activity'],
        queryFn:getStaysTodayActivity
    })
  return {activities,isLoading}
}

export default useTodayActivity
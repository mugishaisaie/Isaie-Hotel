import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

import React from 'react'
import useRecentBookings from "./useRecentBookings.js";
import Spinner from '../../ui/Spinner'
import useRecentStays from "./useRecentStays.js.js";
import Stats from "./stats.jsx";
import useCabins from '../cabins/useCabins'
import SalesChart from "./SalesChart.jsx";
import DurationChart from "./DurationChart.jsx";
import TodayActivity from "../check-in-out/TodayActivity.jsx";

function DashboardLayout() {
  const {isLoading:isLoading1,bookings} = useRecentBookings();
  const {isLoading:isLoading2,stays,confirmedStays,numDays} = useRecentStays();
  const {isLoading:isLoading3,cabins} = useCabins();

  if(isLoading1 || isLoading2|| isLoading3) return <Spinner />
  console.log(bookings)
  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount ={cabins.length}/>
      <TodayActivity />

      <DurationChart confirmedStays={confirmedStays}/>

      <SalesChart bookings={bookings} numDays={numDays}/>
    </StyledDashboardLayout>
  )
}

export default DashboardLayout

import React from 'react'
import Spinner from '../../ui/Spinner'
import CabinRow from './CabinRow'
import Menus from '../../ui/Menus'
import useCabins from "./useCabins";
import Table from "../../ui/Table";


import { useSearchParams } from "react-router";

function CabinTable() {
  const {isLoading,cabins,error} = useCabins();
  const [searchParams] = useSearchParams();
  
    if(isLoading)return <Spinner />;
    if(error) return <h2>{error.message}</h2>

  const filterValues = searchParams.get("discount") || "all";

  let filteredCabins;
  if(filterValues ==="all") filteredCabins = cabins;
  if(filterValues ==="no-discount") filteredCabins = cabins.filter((cabin)=> cabin.discount === 0);
  if(filterValues ==="with-discount") filteredCabins = cabins.filter((cabin)=> cabin.discount > 0);
  return (
    <Menus>

    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header role="row">
  <div></div>
  <div>Cabin</div>
  <div>Capacity</div>
  <div>Price</div>
  <div>Discount</div>
  <div></div>
      </Table.Header>

      <Table.Body 
      // data={cabins} 
      data={filteredCabins} 
      render={(cabin)=>(
        <CabinRow cabin={cabin} key={cabin.id}/>
      )}/>
       
      
    </Table>
      </Menus>
  )
}

export default CabinTable

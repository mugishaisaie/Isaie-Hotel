import React from 'react'
import  TableOperations from '../../ui/TableOperations';
import  Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function CabinTableOperations() {
  return <TableOperations>
    <Filter filterField="discount" options={[
        {value:"all", label:"All"},
        {value:"no-discount", label:"No Discount"},
        {value:"with-discount", label:"With Discount"},
    ]}/>
    <SortBy options={[
        {value:"name-asc", label:"Sort By Name (A-Z)"},
        {value:"name-desc", label:"Sort By Name (Z-A)"},
        {value:"regularPrice-asc", label:"Sort By Regular Price (Low First)"},
        {value:"regularPrice-desc", label:"Sort By Regular Price (High First)"},
        {value:"maxCapacity-asc", label:"Sort By Max Capacity (Low First)"},
        {value:"maxCapacity-desc", label:"Sort By Max Capacity (High First)"},
    ]}/>
  </TableOperations>
}

export default CabinTableOperations

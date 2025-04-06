import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router'

function SortBy({options}) {
    const [searchParams,setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("sortBy") ||"";
    function handleChange(e){
      searchParams.set("sortBy",e.target.value);
        setSearchParams(searchParams)
        console.log(searchParams)
    }

  return <Select options={options} type="white" 
  onChange={handleChange} 
  value={sortBy}
  />
}

export default SortBy

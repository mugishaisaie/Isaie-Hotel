import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import toast from 'react-hot-toast';
import { createEditCabin } from '../../services/apiCabins';

function useEditCabins() {
    const queryClient = useQueryClient();

    const {mutate:editCabin} =useMutation({
        mutationFn: ({newCabinData,id})=>createEditCabin(newCabinData,id),
        onSuccess:()=>{
          toast.success(" Cabin Edited Successfully")
          queryClient.invalidateQueries({
            queryKey:['cabins']
          });
          
        },
        onError: (err)=>toast.error(err.message)
      })
  return  {editCabin}
}

export default useEditCabins

import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { createEditCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';

function useCreateCabin() {
    const queryClient = useQueryClient();

  const {mutate:createCabin,isLoading} =useMutation({
    mutationFn: createEditCabin,
    onSuccess:()=>{
      toast.success("New Cabin created Successfully")
      queryClient.invalidateQueries({
        queryKey:['cabins']
      });
      
    },
    onError: (err)=>toast.error(err.message)
  })
  return {isLoading,createCabin}
    
}

export default useCreateCabin

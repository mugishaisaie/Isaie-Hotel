import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { deleteCabins as deleteCabinApi } from '../../services/apiCabins';
import toast from 'react-hot-toast';

function useDeleteCabin() {
    const queryClient  = useQueryClient();
     const {isLoading,mutate:deleteCabin}= useMutation({
      
        mutationFn:deleteCabinApi,
        onSuccess: ()=>{
          toast.success("Cabin successfully Deleted");
          queryClient.invalidateQueries({
            queryKey: ['cabins']
          })
        },
        onError:(err)=>toast.error(err.message)
      })
  return {isLoading,deleteCabin}
    
}

export default useDeleteCabin

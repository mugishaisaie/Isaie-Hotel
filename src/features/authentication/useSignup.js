import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { signup as signupApi } from '../../services/apiAuth'
import toast from 'react-hot-toast';

function useSignup() {
    const {mutate:signup,isLoading} = useMutation({
        mutationFn:signupApi,
        onSuccess:(user)=>{
            console.log(user);
        toast.success("Account  SuccessFully created! Please verify the new Account from the user's email address")
        }
    })
  return {signup,isLoading}
}

export default useSignup

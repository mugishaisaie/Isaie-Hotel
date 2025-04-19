import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import {login as loginApi} from '../../services/apiAuth'
import toast from "react-hot-toast";
 export default function useLogin(){
   const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate:login,isLoading} = useMutation({
        mutationFn: ({email,password})=>loginApi({email,password}),
        onSuccess: (user)=>{
            // console.log(user)
            // save the user data in cache
            queryClient.setQueriesData(['user'],user);
            navigate('/dashboard')
            toast.success("Login successful")
        },
        onError: (err)=>{
            toast.error("Provided  Email or Password is incorrect")
            console.log(err);
        }


    })

    return {login,isLoading}
}
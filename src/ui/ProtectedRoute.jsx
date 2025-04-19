import React, { useEffect } from 'react'
import { useUser } from '../features/authentication/useUser'
import styled from 'styled-components'
import Spinner from '../ui/Spinner'
import { useNavigate } from 'react-router'
const FullPage = styled.div `
height: 100vh;
background-color: var(--color-grey-50);
display: flex;
align-items: center;
justify-content: center;
`
function ProtectedRoute({children}) {
    const {isAuthenticated,isLoading} = useUser();
 const navigate = useNavigate()
    // 1 Load the Authenticated user
    // 2 if there's no Authenticated user redirect to the Login page
    useEffect(()=>{
        if(!isAuthenticated && !isLoading){
            navigate('/login')
        }
    },[isAuthenticated,isLoading,navigate])
  
    // 3 while Loading Show Spinner
    if(isLoading) return <FullPage>
        <Spinner />
    </FullPage>
    // if there's a user render the App
 if(isAuthenticated) return children
}

export default ProtectedRoute
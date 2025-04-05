import React from 'react'
import GlobalStyles from
'./styles/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router'
import Dashboard  from './pages/Dashboard'
import Bookings  from './pages/Bookings'
import Settings  from './pages/Settings'
import Account  from './pages/Account'
import Users  from './pages/Users'
import Login  from './pages/Login'
import Cabins from './pages/Cabins'
import PageNotFound  from './pages/PageNotFound'
import AppLayout from './ui/AppLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0,
    }
  }
});
function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
    <GlobalStyles />
    <BrowserRouter>
    <Routes>
      <Route  element ={<AppLayout />}>
      <Route path='dashboard' element ={<Dashboard />} />
      <Route path='bookings' element ={<Bookings />} />
      <Route path='cabins' element ={<Cabins />} />
      <Route path='account' element ={<Account />} />
      <Route path='settings' element ={<Settings />} />
      <Route path='users' element ={<Users />} />
      </Route>
      <Route path='login' element ={<Login />} />
      <Route path='*' element ={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
    <Toaster 
    position='top-center'
    gutter={12}
    containerStyle={{margin:'10px'}}
    toastOptions={{
      success:{
        duration:3000,
      },
      error: {
        duration: 4500,
      },
      style: {
        fontSize: '18px',
        maxWidth:'550px',
        padding: '16px 26px',
        backgroundColor:'var(--color-grey-0)',
        color:'var(--color-grey-800)'
      }
    }}
    />
    </QueryClientProvider>
    </>
  )
}

export default App

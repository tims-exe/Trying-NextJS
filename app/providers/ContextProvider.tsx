"use client"

import React, { Children } from 'react'
import { GlobalProvider } from '../context/globalProvider';

interface Props{
    children: React.ReactNode;
}

const ContextProvider = ({children}: Props) => {

  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
        setIsReady(true)
    }, 200);
  }, []); 
  
  if(!isReady) {
    return null;
  }

  return (
    <GlobalProvider>
        {children}
    </GlobalProvider>
  )
}

export default ContextProvider
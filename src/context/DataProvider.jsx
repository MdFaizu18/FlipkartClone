import { createContext, useState } from "react";

export const DataContext = createContext(null);



const DataProvider = ({children}) => {
    const[account2,setAccount2]=useState('')

  return (
     <DataContext.Provider value={{
        account2, setAccount2
     }}>

      {children}
     </DataContext.Provider>
  )
}

export default DataProvider;
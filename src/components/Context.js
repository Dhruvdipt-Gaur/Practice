import React,{ createContext,useState} from 'react'
export const myContext = createContext()
const Context = ({children}) => {
    const [counting, setcounting] = useState(0);
    const add = () => {
      setcounting(counting + 1);
    };
  return (
    <myContext.Provider value={{counting,add}}>
{children}
    </myContext.Provider>
  )
}

export default Context
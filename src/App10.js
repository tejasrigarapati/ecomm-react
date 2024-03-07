import {useState,createContext,useContext} from 'react';
import Child from "./Child";

export const UserContext=createContext();
export default function App10() {
    const [user,setUser]=useState("join");
    const[email,setEmail]=useState("john@gmail.com")
  return (
    <div>
      <UserContext.Provider value={{user,email}}>
        <h2>hello{User) from App10 Component</h2>
        <Child/>
        </UserContext.Provider>

          </div>
  )
}

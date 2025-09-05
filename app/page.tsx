'use client'
import Authpage from "./maincomps/authpage";
import Dashboard from "./maincomps/dashboard";
import EmailAuth from "./maincomps/emailauth";
import Register from "./maincomps/register";
import {create} from 'zustand'
type store ={
  ShowAuth:boolean
  inc:()=>void
}
const useStore = create<store>()((set) => ({
  ShowAuth:true,
  inc: () => set((state) => ({ ShowAuth:false})),
}))
export default function Home() {
  const {ShowAuth,inc}=useStore();
  if(ShowAuth){
    return(
      <Authpage/>
    )
  }
  else return(
    <Dashboard/>
  )
}

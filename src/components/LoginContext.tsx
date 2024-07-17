'use client';
import { useContext, createContext } from "react";

export const LoginContext = createContext({
  isLogIn: false,
  setIsLogIn: function(value:any){
    return value;
  }
});

export const useLogin = ()=> useContext(LoginContext);
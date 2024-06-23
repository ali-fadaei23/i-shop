"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const Context = createContext({});

export function useApi() {
  return useContext(Context);
}

export default function ContextProvider({ children }: PropsWithChildren) {
  const defaultValue = useApi();
  return <Context.Provider value={defaultValue}>{children}</Context.Provider>;
}

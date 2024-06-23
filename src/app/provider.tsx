"use client";
import AuthProvider, { useAuth } from "@/shared/auth/auth-context";
import ContextProvider from "@/shared/context/context";
import { CircularProgress, NextUIProvider } from "@nextui-org/react";
import { useState } from "react";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = useAuth();
  return (
    <NextUIProvider>
      <AuthProvider>
        <ContextProvider>{children}</ContextProvider>
      </AuthProvider>
    </NextUIProvider>
  );
}

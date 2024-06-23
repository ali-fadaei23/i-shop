"use client";
import { AuthContext, useProvideAuth } from "@/shared/auth/auth-context";
import { Context } from "@/shared/context/context";
import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auth = useProvideAuth();
  const [categoryItem, setCategoryItem] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  return (
    <NextUIProvider>
      <AuthContext.Provider value={auth}>
        <Context.Provider
          value={{
            cartItems,
            setCartItems,
            wishlist,
            setWishlist,
            categoryItem,
            setCategoryItem,
          }}
        >
          {children}
        </Context.Provider>
      </AuthContext.Provider>
    </NextUIProvider>
  );
}
